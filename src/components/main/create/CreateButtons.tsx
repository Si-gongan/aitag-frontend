import ActionButton from '@/components/common/button/ActionButton';
import ActionButtonGray from '@/components/common/button/ActionButtonGray';
import ModalChoose from '@/components/common/modal/ModalChoose';
import { PreviewImageItemType } from '@/types/common';
import { AiRequestFormFormat } from '@/utils/constants';
import { fetchWithInterceptor } from '@/utils/fetchWithInterceptor';
import { API_ROUTE, PATH } from '@/utils/routes';
import uploadImage from '@/utils/uploadImage';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface CreateButtonsProps {
  type?: string; // image 업로드로 요청하는건지 확인 => 업로드 url api 추가 필요
  setProgressStage: React.Dispatch<React.SetStateAction<string>>;
  selectedImages: PreviewImageItemType[] | [];
}

export default function CreateButtons({ type = 'url', setProgressStage, selectedImages }: CreateButtonsProps) {
  const [showModalCreact, setShowModalCreact] = useState(false);
  const [showModalComplete, setShowModalComplete] = useState(false);
  const [showModalError, setShowModalError] = useState(false);

  const router = useRouter();

  const handleToHome = () => {
    router.push(PATH.HOME);
  };

  const handleToMyPayment = () => {
    router.push(PATH.MYPAGE_PAYMENT);
  };

  const handleToDashboard = () => {
    router.push(PATH.DASHBOARD);
  };

  const handleClickCreate = async () => {
    setShowModalCreact(false);

    const selectedImagesWorks = await Promise.all(
      selectedImages.map(async (selectedImage) => {
        // 이미지로 대체텍스트 생성시 업로드해서 url을 다시 받아와야 함
        // fetchWithInterceptor를 사용하지 않고 직접 fetch로 구현함 + "Content-Type": "multipart/form-data" 안써줌. => 이유: FormData를 쓰면 자동으로 브라우저가 multipart/form-data로 설정해준다. 만약  내가 직접 사용하면 axios때는 문제가 안되지만 Multipart: Boundary not found가 발생함.

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

    const AiRequestForm = { ...AiRequestFormFormat, works: selectedImagesWorks };
    const options = {
      method: 'POST',
      body: JSON.stringify(AiRequestForm),
    };

    try {
      const response = await fetchWithInterceptor(API_ROUTE.POST, options);
      const result = await response.json();

      if (response.ok || response.status === 201) {
        setShowModalComplete(true);
      } else if (response.status === 400) {
        setShowModalError(true);
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
