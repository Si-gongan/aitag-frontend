'use client';

import TextInputField from '@/components/common/input/TextInputField';
import { useEffect, useState } from 'react';
import SectionLayout from './SectionLayout';
import ImageListTable from './ImageListTable';
import UrlListTable from './UrlListTable';
import { PreviewImageItemType, ScrapImagesResponseType } from '@/types/common';
import { API_ROUTE } from '@/utils/routes';
import { fetchWithInterceptor } from '@/utils/fetchWithInterceptor';
import ModalLoading from '@/components/common/modal/ModalLoading';
import CreateButtons from './CreateButtons';
import RequestForExpert from './RequestForExpert';

export default function TabUrlSection() {
  const [urls, setUrls] = useState<string[]>([]);
  const [selectedUrls, setSelectedUrls] = useState<Set<string>>(new Set());
  const [previewImages, setPreviewImages] = useState<PreviewImageItemType[]>([]);
  const [loading, setIsLoading] = useState(false);
  const [progressStage, setProgressStage] = useState('one'); // one: url 입력, two: 해설진 작성

  const selectedImages = previewImages.filter((previewImage) =>
    Array.from(selectedUrls).includes(previewImage.urlName)
  );

  const handleSubmitUrl = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!(event.target as HTMLFormElement).url.value) return;

    // URL 리스트에 추가
    const newUrl = (event.target as HTMLFormElement).url.value;
    setUrls((prev) => [...prev, newUrl]);
    (event.target as HTMLFormElement).url.value = '';

    // 이미지 미리보기에 해당 newUrl에서 크롤링 함
    const scrapImagesOptions = {
      method: 'GET',
    };
    try {
      setIsLoading(true);

      const response = await fetchWithInterceptor(API_ROUTE.SCRAP_IMAGES(newUrl), scrapImagesOptions);
      const result = await response.json();
      const resultImages = result.result.images;

      const newImageDatas = resultImages.map((image: ScrapImagesResponseType) => {
        return {
          urlName: newUrl,
          image: image.url,
          alt: image.alt,
          language: '한국어',
          keywords: [],
        };
      });

      setPreviewImages((prev) => [...prev, ...newImageDatas]);
    } catch (error) {
      console.error('크롤링 이미지 데이터 요청 실패', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const updatedPreviewImages = previewImages.filter((previewImage) => urls.includes(previewImage.urlName));

    setPreviewImages(updatedPreviewImages);
  }, [urls]);

  return (
    <>
      {progressStage === 'one' ? (
        <div className="flex flex-col mt-40 items-center w-980 gap-100 mb-136">
          {loading && <ModalLoading>이미지 미리보기를 불러오는 중입니다!</ModalLoading>}
          <SectionLayout>
            <form onSubmit={handleSubmitUrl}>
              <TextInputField name="url" placeholder="웹 URL 주소를 입력해주세요" buttonText="확인" />
            </form>
          </SectionLayout>
          <SectionLayout title="URL 리스트" description="대체텍스트 생성이 진행될 URL 리스트입니다.">
            <UrlListTable urls={urls} setUrls={setUrls} selectedUrls={selectedUrls} setSelectedUrls={setSelectedUrls} />
          </SectionLayout>
          <SectionLayout title="이미지 미리보기" description="대체텍스트 생성할 이미지를 선택해주세요.">
            <ImageListTable
              previewImages={previewImages}
              setPreviewImages={setPreviewImages}
              selectedUrls={selectedUrls}
              selectedImages={selectedImages}
            />
          </SectionLayout>
          {selectedUrls.size !== 0 && (
            <CreateButtons setProgressStage={setProgressStage} selectedImages={selectedImages} />
          )}
        </div>
      ) : (
        <RequestForExpert selectedImages={selectedImages} setProgressStage={setProgressStage} />
      )}
    </>
  );
}
