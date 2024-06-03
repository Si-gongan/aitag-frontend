'use client';

import { SupportTabType } from '@/types/common';
import { FAQ_TAB } from '@/utils/constants';

interface FaqTab {
  tab: SupportTabType;
  setTab: React.Dispatch<React.SetStateAction<SupportTabType>>;
}

export default function FaqTab({ tab, setTab }: FaqTab) {
  const handleClick = (faq: SupportTabType) => {
    setTab(faq);
  };

  return (
    <ul className="flex items-center justify-center w-full border-t-1 border-t-grey/4 border-b-1 border-b-grey/4 text-18">
      {FAQ_TAB.map((faq) => (
        <li
          key={faq.id}
          className={`flex items-center justify-center w-196 h-60 ${
            faq.id === tab.id ? 'text-primary-500 font-bold' : 'text-grey/6'
          }`}
          onClick={() => handleClick(faq)}>
          {faq.text}
        </li>
      ))}
    </ul>
  );
}
