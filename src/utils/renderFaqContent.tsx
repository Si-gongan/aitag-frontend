import { FaqContentType } from '@/types/common';
import Image from 'next/image';

export const renderFaqContent = (content: FaqContentType[]) => {
  return content.map((contentItem) => {
    if (contentItem.isPhoto) {
      return (
        <Image
          key={contentItem._id}
          src={contentItem.data}
          layout="responsive"
          width={100}
          height={100}
          alt="FAQ 콘텐츠 이미지"
        />
      );
    } else {
      return (
        <div key={contentItem._id} className="text-grey/7 text-16">
          {contentItem.data}
        </div>
      );
    }
  });
};
