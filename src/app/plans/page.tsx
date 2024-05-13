'use client';

import PlanCard from '@/components/main/plans/PlanCard';
import { PLANS_INFO } from '@/utils/constants';
import { fetchWithInterceptor } from '@/utils/fetchWithInterceptor';
import { getToken } from '@/utils/getToken';
import { API_ROUTE } from '@/utils/routes';

export default function Plans() {
  const lastIndex = PLANS_INFO.length - 1;

  const getUserInfo = async () => {
    const options = {
      method: 'GET',
    };
    const response = await fetchWithInterceptor(API_ROUTE.GET_USER_INFO, options);
    const result = await response.json();
    return result.result.user;
  };

  const handleClick = async (planName: string) => {
    const token = getToken();

    if (!token) {
      console.log('로그인하시겠습니까 팝업창');
    } else {
      const userInfo = await getUserInfo();
      if (userInfo.credit) {
        console.log('민재님 진행중인 결제창 띄우기');
      } else {
        console.log('결제수단을 등록할 것인지 물어보는 팝업');
      }
    }
    console.log('결제창');
  };

  return (
    <section className="flex items-center justify-between w-1302 my-60">
      <div className="flex items-center gap-16">
        {PLANS_INFO.slice(0, 3).map((plan, index) => (
          <PlanCard key={index} plan={plan} onClick={() => handleClick(plan.title)} />
        ))}
      </div>
      <span className="text-28 font-bold text-[#6B7280]">OR</span>
      <PlanCard plan={PLANS_INFO[lastIndex]} onClick={() => handleClick(PLANS_INFO[lastIndex].title)} />
    </section>
  );
}
