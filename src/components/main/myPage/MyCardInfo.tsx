import ActionButtonGray from '@/components/common/button/ActionButtonGray';
import ActionButtonSkyBlue from '@/components/common/button/ActionButtonSkyBlue';
import { CardType } from '@/types/common';
import Image from 'next/image';

type IMyCardInfoProps = {
  card: CardType | null;
  addCard: () => Promise<void>;
  setupPassword: () => Promise<void>;
};

export default function MyCardInfo({ card, addCard, setupPassword }: IMyCardInfoProps) {
  return (
    <div className="flex flex-col rounded-6 overflow-hidden w-full h-201 border-1 border-grey/3">
      <div className="flex justify-between items-center h-47 px-14 bg-grey/0">
        <h3 className="text-[##2C2C2C] font-bold">결제 수단 관리</h3>

        {card ? (
          <ActionButtonSkyBlue text="비밀번호 변경" onClick={setupPassword} size="w-100 h-29 text-12" />
        ) : (
          <ActionButtonSkyBlue text="결제수단 등록" onClick={addCard} size="w-100 h-29 text-12" />
        )}
      </div>

      <hr className="w-full border-t-1 border-grey/3" />

      <div className="flex items-center justify-center h-154">
        {card ? (
          <div className="flex items-start justify-between gap-16 w-450 h-98 p-12 border-1 border-grey/3">
            <Image src={card.cardImgUrl} alt="" width={32} height={21} />

            <div className="flex flex-col gap-2 grow text-12 font-medium text-[#2C2C2C]">
              {card.cardName}
              <p>{card.cardNumber.split('').reduce((acc, c, i) => acc + (i > 0 && i % 4 === 0 ? ' ' : '') + c)}</p>

              <div className="w-full h-[12px]" />

              <p className="text-10 text-[#696969]">결제 수단을 삭제하려면, 먼저 다른 결제 수단을 등록하세요</p>
            </div>

            <ActionButtonGray text="삭제" onClick={addCard} size="w-67 h-30" />
          </div>
        ) : (
          <div className="text-[#00072B]">등록된 카드가 없습니다.</div>
        )}
      </div>
    </div>
  );
}
