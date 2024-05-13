import { createPortal } from 'react-dom';
import TextInputField from '../../main/support/TextInputField';
import { formattedDateV2 } from '@/utils/formattedDate';
import SupportTextarea from '@/components/main/support/SupportTextarea';
import { useState } from 'react';
import uploadImage from '@/utils/uploadImage';
import { fetchWithInterceptor } from '@/utils/fetchWithInterceptor';
import { API_ROUTE } from '@/utils/routes';
import ModalConfirm from './ModalConfirm';
import SupportFileFiled from '@/components/main/support/SupportFileFiled';
import ActionButtonSkyBlue from '../button/ActionButtonSkyBlue';
import ActionButton from '../button/ActionButton';
import Image from 'next/image';

interface ModalSupportProps {
  onClose: () => void;
}

export default function ModalSupport({ onClose }: ModalSupportProps) {
  const [value, setValue] = useState({ clientId: '', email: '', content: '', files: [] as File[] });
  const [loading, setLoading] = useState<boolean>(false);
  const [showModalConfirm, setShowModalConfirm] = useState<boolean>(false);

  const today = new Date();
  const formattedToday = formattedDateV2(String(today));

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setValue((prev) => ({ ...prev, [name]: value }));
  };

  const handleChangeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    setValue((prev) => ({
      ...prev,
      files: files ? Array.from(files) : [],
    }));
  };

  const handleClose = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  const handleSubmit = async () => {
    let uploadedFiles = [];

    if (value.files && value.files.length > 0) {
      uploadedFiles = await Promise.all(
        value.files.map(async (file) => {
          const newGongbangUrl = await uploadImage(file);
          return newGongbangUrl;
        })
      );
    }

    const dataToSend = {
      clientId: value.clientId,
      email: value.email,
      content: value.content,
      files: uploadedFiles,
    };

    const options = {
      method: 'POST',
      body: JSON.stringify(dataToSend),
    };

    try {
      setLoading(true);

      const response = await fetchWithInterceptor(API_ROUTE.OPINION, options);

      if (response.ok || response.status === 201) {
        setShowModalConfirm(true);
      }
    } catch (error) {
      console.error('고객 의견을 전송하는데 실패했습니다.', error);
    } finally {
      setLoading(false);
    }
  };

  return createPortal(
    <div
      onClick={handleClose}
      className="fixed inset-0 flex justify-center items-center h-full w-full bg-overlay z-overlay">
      <div className="relative flex flex-col items-center justify-center p-60 w-702 gap-40 z-modal bg-white shadow-2xl rounded-4">
        <h1 className="text-22 font-bold text-grey/7">고객센터 문의하기</h1>
        <TextInputField name="clientId" label="아이디" onChange={handleChange} />
        <TextInputField name="email" label="이메일" onChange={handleChange} />
        <TextInputField name="createdAt" label="작성일시" value={formattedToday} onChange={handleChange} />
        <SupportTextarea
          name="content"
          label="문의사항"
          placeholder="문의사항을 작성해주세요."
          onChange={handleChange}
        />
        <SupportFileFiled
          name="files"
          label="파일첨부"
          description="파일명은 -,_를 제외한 특수문자는 허용되지 않습니다."
          onChange={handleChangeFile}
        />
        <div className="flex gap-34">
          <ActionButtonSkyBlue text="취소" size="w-130 h-50" onClick={onClose} />
          <ActionButton text="전송하기" size="w-130 h-50" onClick={handleSubmit} />
        </div>
        <button className="absolute -right-52 top-0 w-48 h-48" onClick={onClose}>
          <Image fill src="/images/modal-close.svg" alt="모달창 닫기 버튼" />
        </button>
      </div>
      {showModalConfirm && (
        <ModalConfirm
          title="안내"
          description="고객센터에 문의가 접수되었습니다."
          buttonText="확인"
          onClose={() => onClose()}
        />
      )}
    </div>,
    document.body
  );
}
