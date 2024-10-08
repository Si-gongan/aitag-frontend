'use client';

import { useEffect, useState } from 'react';
import SectionLayout from './SectionLayout';
import ImageListTable from './ImageListTable';
import UrlListTable from './UrlListTable';
import { PreviewImageItemType, ScrapImagesResponseType } from '@/types/common';
import { API_ROUTE } from '@/utils/routes';
import { fetchWithInterceptor } from '@/utils/fetchWithInterceptor';
import CreateButtons from './CreateButtons';
import RequestForExpert from './RequestForExpert';
import UrlInputField from '@/components/common/input/UrlInputField';
import Toast from '@/components/common/toast/Toast';
import { ERROR_MESSAGE } from '@/utils/constants';

export default function TabUrlSection() {
  const [urls, setUrls] = useState<string[]>([]);
  const [selectedUrls, setSelectedUrls] = useState<string[]>([]);
  const [previewImages, setPreviewImages] = useState<PreviewImageItemType[]>([]);
  const [loading, setLoading] = useState(false);
  const [progressStage, setProgressStage] = useState('one'); // one: url 입력, two: 해설진 작성
  const [toastMessage, setToastMessage] = useState('');
  const [selectedImages, setSelectedImages] = useState<PreviewImageItemType[]>([]);

  const handleSubmitUrl = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setToastMessage('');

    const newUrl = (event.target as HTMLFormElement).url.value;

    if (!newUrl) return;

    const existingUrl = urls.find((url) => url === newUrl);
    if (existingUrl) {
      setToastMessage(ERROR_MESSAGE.URL_DUPLICATION);
      return;
    }

    // URL 리스트에 추가
    setUrls((prev) => [...prev, newUrl]);
    (event.target as HTMLFormElement).url.value = '';

    // 이미지 미리보기에 해당 newUrl에서 크롤링 함
    const scrapImagesOptions = {
      method: 'GET',
    };

    try {
      setLoading(true);

      const response = await fetchWithInterceptor(API_ROUTE.SCRAP_IMAGES(newUrl), scrapImagesOptions);
      const result = await response.json();
      const resultImages = result.result.images;

      const newImageDatas = resultImages.map((image: ScrapImagesResponseType) => {
        return {
          site_url: newUrl,
          src: image.url,
          alt: image.alt,
          language: '한국어',
          keywords: [],
          tone: 'informal',
        };
      });

      setPreviewImages((prev) => [...prev, ...newImageDatas]);
      setSelectedImages((prev) => [...prev, ...newImageDatas]);
      setSelectedUrls((prev) => [...prev, newUrl]);
    } catch (error) {
      console.error('크롤링 이미지 데이터 요청 실패', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {progressStage === 'one' ? (
        <div className="flex flex-col mt-40 items-center w-980 gap-100 mb-136">
          <SectionLayout>
            <form onSubmit={handleSubmitUrl}>
              <UrlInputField name="url" placeholder="웹 URL 주소를 입력해주세요" buttonText="확인" loading={loading} />
            </form>
            {toastMessage && (
              <Toast
                type="danger"
                text={toastMessage}
                size="absolute top-8 right-0 h-53 w-880"
                onClose={() => setToastMessage('')}
              />
            )}
          </SectionLayout>
          <SectionLayout title="URL 리스트" description="대체텍스트 생성이 진행될 URL 리스트입니다.">
            <UrlListTable
              urls={urls}
              setUrls={setUrls}
              selectedUrls={selectedUrls}
              setSelectedUrls={setSelectedUrls}
              selectedImages={selectedImages}
              setSelectedImages={setSelectedImages}
              previewImages={previewImages}
            />
          </SectionLayout>
          <SectionLayout title="이미지 미리보기" description="대체텍스트 생성할 이미지를 선택해주세요.">
            {loading && (
              <Toast
                type="danger"
                text="이미지를 불러오는 중입니다. 잠시만 기다려주세요."
                size="absolute top-2 right-0 h-53 w-710"
              />
            )}
            <ImageListTable
              previewImages={previewImages}
              setPreviewImages={setPreviewImages}
              selectedUrls={selectedUrls}
              selectedImages={selectedImages}
              setSelectedImages={setSelectedImages}
            />
          </SectionLayout>
          {selectedImages.length !== 0 && (
            <CreateButtons setProgressStage={setProgressStage} selectedImages={selectedImages} />
          )}
        </div>
      ) : (
        <RequestForExpert selectedImages={selectedImages} setProgressStage={setProgressStage} />
      )}
    </>
  );
}
