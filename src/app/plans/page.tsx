'use client';

import PlanCard from '@/components/main/plans/PlanCard';
import { usePayment } from '@/hooks/usePayment';
import { GetUserInfoType } from '@/types/common';
import { TEMP_PLANS_INFO } from '@/utils/constants';
import { fetchWithInterceptor } from '@/utils/fetchWithInterceptor';
import { getToken } from '@/utils/getToken';
import { API_ROUTE } from '@/utils/routes';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Plans() {
  const router = useRouter();

  const [userInfo, setUserInfo] = useState<GetUserInfoType | null>(null);
  const { card, addCard, requestPayment } = usePayment(userInfo?.id);

  const getUserInfo = async () => {
    const options = {
      method: 'GET',
    };
    const response = await fetchWithInterceptor(API_ROUTE.GET_USER_INFO, options);
    const result = await response.json();
    const user = result.result.user;
    setUserInfo(user);
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  const handleClick = async (i: number) => {
    const token = await getToken();

    if (!token) {
      router.push('/login');
    } else {
      if (card) {
        await requestPayment(TEMP_PLANS_INFO[i].amount, TEMP_PLANS_INFO[i].credits, userInfo!.email);
      } else {
        await addCard();
        await requestPayment(TEMP_PLANS_INFO[i].amount, TEMP_PLANS_INFO[i].credits, userInfo!.email);
      }
    }
  };

  return (
    <section className="flex items-center justify-between w-full my-60">
      {/* <div className="flex items-center gap-16">
        {PLANS_INFO.slice(0, 3).map((plan, index) => (
          <PlanCard key={index} plan={plan} onClick={() => handleClick(plan.title)} />
        ))}
      </div>

      <span className="text-28 font-bold text-[#6B7280]">OR</span>

      <PlanCard plan={PLANS_INFO[lastIndex]} onClick={() => handleClick(PLANS_INFO[lastIndex].title)} /> */}

      <div className="w-full flex justify-center items-center gap-36">
        {TEMP_PLANS_INFO.map((plan, i) => (
          <PlanCard key={i} plan={plan} onClick={() => handleClick(i)} />
        ))}
      </div>
    </section>
  );
}
