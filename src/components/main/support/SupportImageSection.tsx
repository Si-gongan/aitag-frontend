// 'use client';

// import Image from 'next/image';
// import { useState } from 'react';
// import TabButton from './TabButton';
// import { usePathname } from 'next/navigation';

// export default function SupportImageSection() {
//   const pathname = usePathname();
//   const parts = pathname.split('/');
//   const currentPage = parts[2];

//   const initialPage = currentPage === 'notice' ? { id: 'notice', text: '공지사항' } : { id: 'faq', text: 'FAQ' };

//   const [page, setPage] = useState(initialPage);

//   return (
//     <section className="w-full flex justify-center items-center h-357 bg-[url('/images/support-image.png')] bg-cover bg-center">
//       <div className="w-full max-w-980 flex flex-col gap-60">
//         <div className="flex flex-col gap-10">
//           <div className="flex gap-15 items-center text-white text-16">
//             <Image src="/images/icon_home.png" alt="집 아이콘" width={17} height={14} />
//             <Image src="/images/greater-than.png" alt="오른쪽 꺽쇠 아이콘" width={5} height={9} />
//             고객센터
//             <Image src="/images/greater-than.png" alt="오른쪽 꺽쇠 아이콘" width={5} height={9} />
//             {page.text}
//           </div>
//           <h1 className="text-52 font-bold text-white">고객센터</h1>
//         </div>
//         <TabButton page={page} setPage={setPage} />
//       </div>
//     </section>
//   );
// }

//

'use client';

import Image from 'next/image';
import { useState } from 'react';
import TabButton from './TabButton';
import { usePathname } from 'next/navigation';

export default function SupportImageSection() {
  const pathname = usePathname();
  // const parts = pathname.split('/');
  const parts = pathname.split('/');
  const currentPage = parts[parts.length - 1];
  // console.log(currentPage);

  const initialPage = currentPage === 'notice' ? { id: 'notice', text: '공지사항' } : { id: 'faq', text: 'FAQ' };

  const [page, setPage] = useState(initialPage);

  return (
    <section className="w-full flex justify-center items-center h-357 bg-[url('/images/support-image.png')] bg-cover bg-center">
      <div className="w-full max-w-980 flex flex-col gap-60">
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
