import ActionButton from '@/components/common/button/ActionButton';
import ActionButtonGray from '@/components/common/button/ActionButtonGray';
import ModalChoose from '@/components/common/modal/ModalChoose';
import { PreviewImageItemType } from '@/types/common';
import { AiRequestFormFormat } from '@/utils/constants';
import { fetchWithInterceptor } from '@/utils/fetchWithInterceptor';
import { API_ROUTE, PATH } from '@/utils/routes';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface CreateButtonsProps {
  setProgressStage: React.Dispatch<React.SetStateAction<string>>;
  selectedImages: PreviewImageItemType[] | [];
}

export default function CreateButtons({ setProgressStage, selectedImages }: CreateButtonsProps) {
  const [showModalCreact, setShowModalCreact] = useState(false);
  const [showModalComplete, setShowModalComplete] = useState(false);

  const router = useRouter();

  const handleToHome = () => {
    router.push(PATH.HOME);
  };

  const handleToDashboard = () => {
    router.push(PATH.DASHBOARD);
  };

  const handleClickCreate = async () => {
    setShowModalCreact(false);

    const selectedImagesWorks = selectedImages.map((selectedImage) => {
      return {
        image: selectedImage.image,
        language: 'Korean',
        keywords: selectedImage.keywords,
      };
    });

    const AiRequestForm = { ...AiRequestFormFormat, works: selectedImagesWorks };
    const options = {
      method: 'POST',
      body: JSON.stringify(AiRequestForm),
    };

    try {
      const response = await fetchWithInterceptor(API_ROUTE.POST, options);
      // const result = await response.json();
      if (response.ok || response.status === 201) {
        setShowModalComplete(true);
      }
    } catch (error) {
      alert('에러');
    }
  };

  return (
    <>
      <div className="flex gap-20 w-full">
        <ActionButtonGray text="AI 생성" size="h-54 w-1/2 text-15" onClick={() => setShowModalCreact(true)} />
        <ActionButton text="해설진 작성" size="h-54 w-1/2 text-15" onClick={() => setProgressStage('two')} />
      </div>
      {showModalCreact && (
        <ModalChoose
          title="생성하기"
          description="선택한 이미지의 대체텍스트를 생성하시겠습니까?"
          addDescription="생성에는 n Credit 이 사용됩니다."
          leftButtonText="취소"
          rightButtonText="확인"
          onClick={handleClickCreate}
          onClose={() => setShowModalCreact(false)}
        />
      )}
      {showModalComplete && (
        <ModalChoose
          title="생성 요청 완료"
          description="대체텍스트 생성이 정상적으로 요청되었습니다."
          addDescription="진행상황은 워크스페이스 > 대시보드 탭에서 확인 가능합니다."
          leftButtonText="대시보드 탭 이동"
          rightButtonText="홈으로"
          onClick={handleToHome}
          onCancle={handleToDashboard}
          onClose={() => setShowModalComplete(false)}
        />
      )}
    </>
  );
}
