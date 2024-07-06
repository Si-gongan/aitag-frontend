import ActionButton from '@/components/common/button/ActionButton';
import ActionButtonGray from '@/components/common/button/ActionButtonGray';
import ModalChoose from '@/components/common/modal/ModalChoose';
import ModalConfirm from '@/components/common/modal/ModalConfirm';
import { WorkType } from '@/types/common';
import { ExpertRequestFormFormat, InspectRequestFormFormat } from '@/utils/constants';
import { fetchWithInterceptor } from '@/utils/fetchWithInterceptor';
import { API_ROUTE, PATH } from '@/utils/routes';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface RequestExpertFormProps {
  postId: string;
  selectedWorks: WorkType[];
  setRequestExpertPage: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function RequestExpertForm({ postId, selectedWorks, setRequestExpertPage }: RequestExpertFormProps) {
  const [value, setValue] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [showModalConfirm, setShowModalConfirm] = useState<boolean>(false);
  const [showModalError, setShowModalError] = useState<boolean>(false);

  const router = useRouter();

  const handleToMyPayment = () => {
    router.push(PATH.MYPAGE_PAYMENT);
  };

  const handleChangeTextarea = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  const handleClickRequest = async () => {
    const workIds = selectedWorks.map((work) => work.id);

    setLoading(true);

    const ExpertRequestForm = {
      ...InspectRequestFormFormat,
      postId,
      workIds,
      detail: value,
    };
    const options = {
      method: 'POST',
      body: JSON.stringify(ExpertRequestForm),
    };

    try {
      const response = await fetchWithInterceptor(API_ROUTE.INSPECT, options);

      if (response.ok || response.status === 201) {
        setShowModalConfirm(true);

        setTimeout(() => {
          router.push('/dashboard');
        }, 3000);
      } else if (response.status === 400) {
        setShowModalError(true);
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
    </>
  );
}
