'use client';

import { GetPaymentType } from '@/types/common';
import { fetchWithInterceptor } from '@/utils/fetchWithInterceptor';
import { formattedDate } from '@/utils/formattedDate';
import { API_ROUTE } from '@/utils/routes';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';

function Success() {
  const params = useSearchParams();
  const paymentId = params.get('paymentId');

  const [paymentInfo, setPaymentInfo] = useState<GetPaymentType | null>(null);

  const getPaymentInfo = async () => {
    const options = {
      method: 'GET',
    };
    const response = await fetchWithInterceptor(API_ROUTE.GET_PAYMENT_DETAIL(paymentId ?? ''), options);
    const result = await response.json();
    const payment = result.result.payment;
    setPaymentInfo(payment);
  };

  useEffect(() => {
    getPaymentInfo();
  }, [paymentId]);

  return (
    <div className="flex flex-col items-center">
      <Image src="/images/Icon-check.svg" width={130} height={130} alt="" className="mt-[104px]" />

      <h1 className="text-[35px] font-bold text-grey/7 mt-[60px]">결제가 성공적으로 완료되었습니다.</h1>

      <span className="text-grey/7 mt-[20px]">결제 내역은 마이페이지의 결제 정보 탭에서 확인할 수 있습니다.</span>

      <div className="w-[680px] mt-[60px] px-[40px] py-[30px] border-2 border-grey/4 rounded-[18px] bg-white">
        <h2 className="text-[26px] font-bold text-grey/7 mx-[32px]">결제 내역</h2>

        <div className="flex flex-col justify-between mt-[20px] border-1 border-grey/4 bg-grey/0 rounded-[18px] gap-[18px] py-[16px] px-[30px]">
          <h2 className="text-[20px] font-bold text-grey/7">결제 금액</h2>

          <div className="flex gap-[30px]">
            <h2 className="font-bold text-grey/6">결제 금액</h2>

            <h2 className="font-bold text-grey/7">:</h2>

            <h2 className="font-bold text-grey/7">{paymentInfo?.amount.toLocaleString()}원</h2>
          </div>
        </div>

        <div className="flex flex-col justify-between mt-[20px] border-1 border-grey/4 bg-grey/0 rounded-[18px] gap-[18px] py-[16px] px-[30px]">
          <h2 className="text-[20px] font-bold text-grey/7">결제 정보</h2>

          <div className="flex gap-[30px]">
            <h2 className="font-bold text-grey/6">결제 방식</h2>

            <h2 className="font-bold text-grey/7">:</h2>

            <h2 className="font-bold text-grey/7">{paymentInfo?.method}</h2>
          </div>

          <div className="flex gap-[30px]">
            <h2 className="font-bold text-grey/6">결제 일시</h2>

            <h2 className="font-bold text-grey/7">:</h2>

            <h2 className="font-bold text-grey/7">{formattedDate(paymentInfo?.createdAt ?? '')}</h2>
          </div>

          <div className="flex gap-[30px]">
            <h2 className="font-bold text-grey/6">충전 크레딧</h2>

            <h2 className="font-bold text-grey/7">:</h2>

            <h2 className="font-bold text-grey/7">{paymentInfo?.credit} credit</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Wrapper() {
  return (
    <Suspense>
      <Success />
    </Suspense>
  );
}
