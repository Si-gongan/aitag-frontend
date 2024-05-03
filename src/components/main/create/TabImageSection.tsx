'use client';

import { useState } from 'react';
import SectionLayout from './SectionLayout';
import FileInputField from '@/components/common/input/FileInputField';
import { PreviewInfoItemType } from '@/types/common';
import ImageUploadCard from './ImageUploadCard';

export default function TabImageSection() {
  const [isActive, setIsActive] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [previewInfos, setPreviewInfos] = useState<PreviewInfoItemType[]>([]);

  return (
    <div className="flex flex-col mt-40 items-center w-980 gap-100 mb-136">
      <SectionLayout title="이미지 파일 업로드">
        <FileInputField previewInfos={previewInfos} setPreviewInfos={setPreviewInfos} setUploading={setUploading} />
        <div className="flex flex-col gap-20">
          {previewInfos.map((info, index) => (
            <ImageUploadCard
              key={index}
              info={info}
              previewInfos={previewInfos}
              setPreviewInfos={setPreviewInfos}
              uploading={uploading}
            />
          ))}
        </div>
      </SectionLayout>
      {/* <SectionLayout title="이미지 미리보기" description="대체텍스트 생성할 이미지를 선택해주세요.">
        <ImageListTabel previewImages={previewInfos} setPreviewImages={setPreviewInfos} selectedUrls={setPreviewInfos} />
      </SectionLayout> */}
    </div>
  );
}
