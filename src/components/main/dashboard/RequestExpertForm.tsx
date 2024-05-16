import ActionButton from '@/components/common/button/ActionButton';
import ActionButtonGray from '@/components/common/button/ActionButtonGray';
import ModalConfirm from '@/components/common/modal/ModalConfirm';
import { WorkType } from '@/types/common';
import { ExpertRequestFormFormat } from '@/utils/constants';
import { fetchWithInterceptor } from '@/utils/fetchWithInterceptor';
import { API_ROUTE } from '@/utils/routes';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface RequestExpertFormProps {
  selectedWorks: WorkType[];
  setRequestExpertPage: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function RequestExpertForm({ selectedWorks, setRequestExpertPage }: RequestExpertFormProps) {
  const [value, setValue] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [showModalConfirm, setShowModalConfirm] = useState<boolean>(false);

  const router = useRouter();

  const handleChangeTextarea = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  const handleClickRequest = async () => {
    const worksForm = selectedWorks.map((selectedWork) => {
      return { image: selectedWork.image, language: 'Korean', keywords: selectedWork.keywords };
    });

    setLoading(true);

    const ExpertRequestForm = { ...ExpertRequestFormFormat, works: worksForm, detail: value };
    const options = {
      method: 'POST',
      body: JSON.stringify(ExpertRequestForm),
    };

    try {
      const response = await fetchWithInterceptor(API_ROUTE.POST, options);

      if (response.ok || response.status === 201) {
        setShowModalConfirm(true);

        setTimeout(() => {
          router.push('/dashboard');
        }, 3000);
      }
    } catch (error) {
      alert('에러');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flex flex-col gap-50 px-40">
        <textarea
          value={value}
          placeholder="요청 내용을 입력해 주세요."
          className="w-full h-400 px-24 py-17 border-1 border-grey/4 rounded-4 text-grey/7 placeholder:text-grey/6 resize-none focus:outline-none focuse:border-primary-500"
          onChange={handleChangeTextarea}
        />
        <div className="flex justify-end w-full gap-8">
          <ActionButtonGray text="취소" size="w-98 h-54" onClick={() => setRequestExpertPage(false)} />
          <ActionButton text="확인" size="w-98 h-54" onClick={handleClickRequest} />
        </div>
      </div>
      {showModalConfirm && (
        <ModalConfirm
          title="서비스 접수 완료"
          description="서비스가 정상적으로 접수되었습니다"
          buttonText="확인"
          onClose={() => setShowModalConfirm(false)}
        />
      )}
    </>
  );
}
