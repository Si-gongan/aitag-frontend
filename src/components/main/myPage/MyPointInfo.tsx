import ActionButtonSkyBlue from '@/components/common/button/ActionButtonSkyBlue';
import { PATH } from '@/utils/routes';
import { useRouter } from 'next/navigation';

interface MyPointInfoProps {
  credit: number;
}

export default function MyPointInfo({ credit = 0 }: MyPointInfoProps) {
  const router = useRouter();

  return (
    <div className="flex flex-col rounded-6 overflow-hidden w-full h-201 border-1 border-grey/3">
      <h3 className="flex items-center h-47 text-[##2C2C2C] font-bold px-14 bg-grey/0">요금제 정보</h3>

      <hr className="w-full border-t-1 border-grey/3" />

      <div className="flex justify-between h-154 py-13 px-22 gap-60">
        <div className="flex flex-col justify-between w-full">
          <div className="flex flex-col justify-between h-63">
            <span className="text-12 text-[#696969]">보유 Credit</span>

            <h2 className="text-26 text-grey/7 font-bold">{credit} Credits</h2>
          </div>

          <div className="flex self-end gap-4">
            <ActionButtonSkyBlue
              text="Credit 구매하기"
              onClick={() => router.push(PATH.PLANS)}
              size="w-120 h-30 text-12"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
