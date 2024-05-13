'use client';

import PlanCard from '@/components/main/plans/PlanCard';
import { PLANS_INFO } from '@/utils/constants';
import { getToken } from '@/utils/getToken';

export default function Plans() {
  const lastIndex = PLANS_INFO.length - 1;

  const handleClick = (planName: string) => {
    const token = getToken();

    if (!token) {
      console.log('로그인하시겠습니까 팝업창');
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
