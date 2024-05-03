import Spinner from '@/components/common/animation/Spinner';
import { PreviewImageItemType, PreviewInfoItemType } from '@/types/common';
import Image from 'next/image';
import React from 'react';

interface imageUploadCardProps {
  info: PreviewImageItemType;
  previewImages: PreviewImageItemType[];
  setPreviewImages: React.Dispatch<React.SetStateAction<PreviewImageItemType[]>>;
  uploading: boolean;
}

export default function ImageUploadCard({ info, previewImages, setPreviewImages, uploading }: imageUploadCardProps) {
  const { name, size } = info;

  const handleDelete = (name: string) => {
    const newPreviewImages = previewImages.filter((image) => image.name !== name);
    setPreviewImages(newPreviewImages);
  };

  return (
    <div className="flex flex-col py-30 px-50 bg-grey/0 border-1 border-grey/4 rounded-8">
      <div className="flex justify-between">
        <div className="flex gap-34 items-center">
          <Image src="/images/image-icon.png" alt="파일 아이콘" width={56} height={56} />
          <div className="flex flex-col gap-16">
            <h3 className="text-grey/7 font-bold">{name}</h3>
            <div className="flex gap-10 items-center">
              <span className="text-[#A9ACB4]">{size}</span>
              {uploading ? (
                <Spinner text="Uploading..." loading={true} />
              ) : (
                <Spinner loading={false} completionText="Completed" />
              )}
            </div>
          </div>
        </div>
        <button className="flex-grow-0 w-30 h-30" onClick={() => handleDelete(name)}>
          {uploading ? (
            <Image src="/images/close-circle.svg" alt="업로드 취소 버튼" width={30} height={30} />
          ) : (
            <Image src="/images/trash.svg" alt="업로드 파일 삭제 버튼" width={30} height={30} />
          )}
        </button>
      </div>
    </div>
  );
}
