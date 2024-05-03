'use client';

import { useState } from 'react';
import SectionLayout from './SectionLayout';
import FileInputField from '@/components/common/input/FileInputField';
import { PreviewImageItemType, PreviewInfoItemType } from '@/types/common';
import ImageUploadCard from './ImageUploadCard';
import ImageListTable from './ImageListTable';

export default function TabImageSection() {
  const [uploading, setUploading] = useState(false);
  const [previewImages, setPreviewImages] = useState<PreviewImageItemType[]>([]);

  return (
    <div className="flex flex-col mt-40 items-center w-980 gap-100 mb-136">
      <SectionLayout title="이미지 파일 업로드">
        <FileInputField previewImages={previewImages} setPreviewImages={setPreviewImages} setUploading={setUploading} />
        <div className="flex flex-col gap-20">
          {previewImages.map((info, index) => (
            <ImageUploadCard
              key={index}
              info={info}
              previewImages={previewImages}
              setPreviewImages={setPreviewImages}
              uploading={uploading}
            />
          ))}
        </div>
      </SectionLayout>
      <SectionLayout title="이미지 미리보기" description="대체텍스트 생성할 이미지를 선택해주세요.">
        <ImageListTable
          type="image"
          previewImages={previewImages}
          setPreviewImages={setPreviewImages}
          selectedUrls={previewImages}
          selectedImages={previewImages}
        />
      </SectionLayout>
    </div>
  );
}
