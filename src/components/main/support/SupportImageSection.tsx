'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import TabButton from './TabButton';
import { usePathname } from 'next/navigation';

export default function SupportImageSection() {
  const pathname = usePathname();
  const parts = pathname.split('/');
  const currentPage = parts[2];

  const [page, setPage] = useState({ id: 'notice', text: '공지사항' });

  useEffect(() => {
    const initialPage = currentPage === 'notice' ? { id: 'notice', text: '공지사항' } : { id: 'faq', text: 'FAQ' };
    setPage(initialPage);
  }, [currentPage]);

  return (
    <section className="relative flex justify-center items-center w-full h-357">
      <Image
        src="/images/support-image.png"
        alt="고객센터 페이지 배너"
        fill
        sizes="100vw"
        style={{ objectFit: 'cover' }}
        placeholder="blur"
        blurDataURL="/images/plansImage.png"
      />
      <div className="absolute w-full max-w-980 flex flex-col gap-30 text-white">
        <div className="flex flex-col gap-10">
          <div className="flex gap-15 items-center text-white text-16">
            <Image src="/images/icon_home.png" alt="집 아이콘" width={17} height={14} />
            <Image src="/images/greater-than.png" alt="오른쪽 꺽쇠 아이콘" width={5} height={9} />
            고객센터
            <Image src="/images/greater-than.png" alt="오른쪽 꺽쇠 아이콘" width={5} height={9} />
            {page.text}
          </div>
          <h1 className="text-52 font-bold text-white">고객센터</h1>
        </div>
        <TabButton page={page} setPage={setPage} />
      </div>
    </section>
  );
}
