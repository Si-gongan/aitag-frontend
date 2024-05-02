'use client';

import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { CREAT_IMAGE_SECTION } from '@/utils/constants';

export default function ImageSection() {
  const pathname = usePathname();
  const parts = pathname.split('/');
  const page = parts[2];

  const pageDescription = page === 'url' ? CREAT_IMAGE_SECTION[0].description : CREAT_IMAGE_SECTION[1].description;

  return (
    <div className="relative flex justify-center items-center h-429 w-full ">
      <div className="absolute flex flex-col justify-center items-center gap-16 z text-white">
        <h3 className="text-16 font-bold lineHeight-24">대체텍스트 생성</h3>
        <h1 className="text-40 font-bold lineHeight-60 mb-16">
          {page === 'url' ? CREAT_IMAGE_SECTION[0].title : CREAT_IMAGE_SECTION[1].title}
        </h1>
        <div className="flex flex-col gap-2">
          {pageDescription.map((description, index) => (
            <p key={index} className="lineHieght-21 text-center">
              {description}
            </p>
          ))}
        </div>
      </div>
      <Image
        src="/images/create_main.png"
        layout="fill"
        objectFit="cover"
        alt="대체텍스트 생성과 관련된 필기하는 비즈니스맨 이미지"
      />
    </div>
  );
}
