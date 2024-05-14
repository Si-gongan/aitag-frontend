import ActionButtonGray from '@/components/common/button/ActionButtonGray';
import ActionButtonSkyBlue from '@/components/common/button/ActionButtonSkyBlue';
import { PLANS_INFO } from '@/utils/constants';

interface MyPlanInfoProps {
  rate: string;
  credit: number;
}

export default function MyPlanInfo({ rate = 'none', credit = 0 }: MyPlanInfoProps) {
  const myPlanInfo = rate === 'none' ? rate : PLANS_INFO.find((plan) => plan.title === rate.toUpperCase());

  return (
    <div className="flex flex-col rounded-6 overflow-hidden w-full h-201 border-1 border-grey/3">
      <h3 className="flex items-center h-47 text-[##2C2C2C] font-bold px-14 bg-grey/0">요금제 정보</h3>
      <hr className="w-full border-t-1 border-grey/3" />
      {rate === 'none' ? (
        <div className="flex flex-col justify-between h-154 py-13 px-22">
          <span className="text-12 text-[#696969]">내 요금제</span>
          <p className="text-18 text-grey/7 text-center">
            요금제를 통해 더욱 저렴한 가격으로
            <br />
            서비스를 이용해보세요.
          </p>
          <div className="flex w-full justify-end">
            <ActionButtonSkyBlue text="요금제 구매하기" size="w-120 h-30 text-12" />
          </div>
        </div>
      ) : (
        <div className="flex justify-between h-154 py-13 px-22 gap-60">
          <div className="flex flex-col justify-between w-1/2">
            <div className="flex flex-col justify-between h-85">
              <span className="text-12 text-[#696969]">내 요금제</span>
              {typeof myPlanInfo !== 'string' && <h2 className="text-26 text-grey/7 font-bold">{myPlanInfo!.title}</h2>}
              <span className="text-14 text-grey/7">매월 0일 결제 예정</span>
            </div>
            <div className="flex gap-4">
              <ActionButtonSkyBlue text="요금제 변경" size="w-90 h-30 text-12" />
              <ActionButtonGray text="요금제 해지" size="w-90 h-30 text-12" />
            </div>
          </div>
          <div className="flex flex-col justify-between w-1/2">
            <div className="flex flex-col justify-between h-63">
              <span className="text-12 text-[#696969]">보유 Credit</span>
              <h2 className="text-26 text-grey/7 font-bold">{credit} Credits</h2>
            </div>
            <div className="flex gap-4">
              <ActionButtonSkyBlue text="Credit 구매하기" size="w-120 h-30 text-12" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
