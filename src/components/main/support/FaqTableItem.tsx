import { FaqItemType } from '@/types/common';
import Image from 'next/image';
import { useState } from 'react';

interface FaqTableItemProps {
  item: FaqItemType;
}

export default function FaqTableItem({ item }: FaqTableItemProps) {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  return (
    <td
      className={`flex flex-col w-full ${isClicked ? 'bg-grey/0 opacity-100' : 'h-82 opacity-65'}`}
      onClick={() => setIsClicked((prev) => !prev)}>
      <div className="flex items-center justify-between gap-16 w-full py-16 pl-40">
        <div className="flex items-center justify-center w-40 h-40 bg-[#2062D1] rounded-full opacity-70">
          <Image src="/images/question-icon.svg" alt="대문자 Q 모양의 질문 아이콘" width={14} height={17} />
        </div>
        <h3 className="text-18 text-grey/7 grow">{item.title}</h3>
        <div className={`flex items-center justify-center transition-transform ${isClicked ? 'rotate-180' : ''}`}>
          <Image src="/images/chevron-down.svg" alt="열고 닫는 위아래 화살표 아이콘" width={50} height={50} />
        </div>
      </div>
      {isClicked && <div className="flex pl-96 pr-50 pb-26 text-grey/7 text-16">{item.content}</div>}
    </td>
  );
}
