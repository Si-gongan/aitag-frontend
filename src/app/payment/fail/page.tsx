'use client';

import Image from 'next/image';
import { useSearchParams } from 'next/navigation';

export default function Fail() {
  const params = useSearchParams();
  const reason = params.get('reason');

  return (
    <div className="flex flex-col items-center">
      <Image src="/images/Wrong.svg" width={130} height={130} alt="" className="mt-[104px]" />

      <h1 className="text-[35px] font-bold text-grey/7 mt-[60px]">결제에 실패했습니다.</h1>

      <span className="text-grey/7 mt-[20px]">이유: {reason ?? '알 수 없는 오류'}</span>
    </div>
  );
}
