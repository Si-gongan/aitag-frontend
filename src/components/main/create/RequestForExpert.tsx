import ActionButtonGray from '@/components/common/button/ActionButtonGray';
import SectionLayout from './SectionLayout';
import React, { useState } from 'react';
import ActionButton from '@/components/common/button/ActionButton';
import { PreviewImageItemType } from '@/types/common';
import { ExpertRequestFormFormat } from '@/utils/constants';
import { fetchWithInterceptor } from '@/utils/fetchWithInterceptor';
import { API_ROUTE, PATH } from '@/utils/routes';
import ModalConfirm from '@/components/common/modal/ModalConfirm';
import uploadImage from '@/utils/uploadImage';
import ModalChoose from '@/components/common/modal/ModalChoose';
import { useRouter } from 'next/navigation';

interface RequestForExpertProps {
  type?: string; // image 업로드로 요청하는건지 확인 => 업로드 url api 추가 필요
  selectedImages: PreviewImageItemType[] | [];
  setProgressStage: React.Dispatch<React.SetStateAction<string>>;
}

export default function RequestForExpert({ type = 'url', selectedImages, setProgressStage }: RequestForExpertProps) {
  const [value, setValue] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [showModalConfirm, setShowModalConfirm] = useState<boolean>(false);
  const [showModalError, setShowModalError] = useState(false);

  const router = useRouter();

  const handleChangeTextarea = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  const handleToMyPayment = () => {
    router.push(PATH.MYPAGE_PAYMENT);
  };

  const handleToBack = () => {
    setShowModalConfirm(false);

    window.location.reload();
  };

  const handleClickRequest = async () => {
    const selectedImagesWorks = await Promise.all(
      selectedImages.map(async (selectedImage) => {
        if (type === 'image' && selectedImage.file) {
          const newGongbangUrl = await uploadImage(selectedImage.file);

          return {
            image: newGongbangUrl,
            language: 'Korean',
            keywords: selectedImage.keywords,
            tone: selectedImage.tone,
          };
        }

        return {
          image: selectedImage.image,
          language: 'Korean',
          keywords: selectedImage.keywords,
          tone: selectedImage.tone,
        };
      })
    );

    setLoading(true);

    const ExpertRequestForm = { ...ExpertRequestFormFormat, works: selectedImagesWorks, detail: value };
    const options = {
      method: 'POST',
      body: JSON.stringify(ExpertRequestForm),
    };

    try {
      const response = await fetchWithInterceptor(API_ROUTE.POST, options);
      const result = await response.json();

      if (response.ok || response.status === 201) {
        setShowModalConfirm(true);
      } else if (response.status === 400) {
        setShowModalError(true);
      }
    } catch (error) {
      alert('에러');
    } finally {
      setLoading(false);
    }
  };

  const handleChangeStage = () => {
    setProgressStage('one');
  };

  return (
    <div className="flex flex-col gap-40 w-980 p-40 mb-60">
      <ActionButtonGray text="뒤로가기" size="w-144 h-54" type="back" onClick={handleChangeStage} />
      <SectionLayout title="해설진 작성 세부 요청서">
        <textarea
          placeholder="작성에 참고할 구체적인 지점들, 혹은 원하시는 방향성이 있으시다면 자유롭게 작성해주세요."
          className="w-full h-338 px-24 py-17 border-1 border-grey/4 rounded-4 text-grey/7 focus:border-primary-500 resize-none focus:outline-none mb-20"
          onChange={handleChangeTextarea}
        />
        <ActionButton text="확인" size="w-full h-54" onClick={handleClickRequest} />
      </SectionLayout>
      {showModalConfirm && (
        <ModalConfirm
          title="서비스 접수 완료"
          description="서비스가 정상적으로 접수되었습니다"
          buttonText="확인"
          onClose={() => setShowModalConfirm(false)}
          onClick={handleToBack}
        />
      )}
      {showModalError && (
        <ModalChoose
          title="포인트 부족"
          description="포인트가 부족해서 생성을 실패했습니다."
          addDescription="포인트를 충전하러 가시겠습니까?"
          leftButtonText="취소"
          rightButtonText="충전하러 가기"
          onClick={handleToMyPayment}
          onClose={() => setShowModalError(false)}
        />
      )}
    </div>
  );
}
