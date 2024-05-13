import ActionButton from '@/components/common/button/ActionButton';
import ActionButtonSkyBlue from '@/components/common/button/ActionButtonSkyBlue';
import { PlansInfoType } from '@/types/common';

interface PlanCardProps {
  plan: PlansInfoType;
  onClick: () => void;
}

export default function PlanCard({ plan, onClick }: PlanCardProps) {
  const { title, credits, rate, period, recommend } = plan;

  return (
    <article
      className="relative flex flex-col items-center justify-between py-40 w-291 h-351 rounded-20 border-1 border-[#E5E7EB] shadow-[0_1px_4px_0_rgba(0,0,0,0.1)]"
      onClick={onClick}>
      <div className="flex flex-col gap-14 items-center">
        <h1 className="text-25 font-bold text-primary-500">{title}</h1>
        <h3 className="text-22 font-semibold">{credits}</h3>
        <div className="flex items-center gap-4 font-bold text-25">
          <h2 className="flex h-44 items-center text-44 tracking-tight ">{rate}</h2>
          {period}
        </div>
      </div>
      {recommend ? (
        <ActionButton text="구매하기" size="w-235 h-54" />
      ) : (
        <ActionButtonSkyBlue text="구매하기" size="w-235 h-54" />
      )}
      {recommend ? (
        <span className="absolute -top-19 flex items-center justify-center px-16 rounded-20 h-38 bg-primary-500 text-white font-18 font-medium">
          추천
        </span>
      ) : (
        ''
      )}
    </article>
  );
}
