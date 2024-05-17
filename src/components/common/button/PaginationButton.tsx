'use client';

import { PaginationType } from '@/types/common';

interface PagenationButtonProps {
  pagination: PaginationType;
  totalPages: number;
  onClick: (num: number) => void;
}

export default function PagenationButton({ pagination, totalPages, onClick }: PagenationButtonProps) {
  const numbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  const handleClick = (num: number) => {
    onClick(num);
  };

  return (
    <div className="flex justify-center items-center w-full gap-2 ">
      {numbers.map((num) => (
        <div
          key={num}
          onClick={() => handleClick(num)}
          className={`flex justify-center items-center w-40 h-40 rounded-4 ${
            num === pagination.click ? 'font-bold bg-[#F2F6FE] text-primary-500 border-1 border-primary-500' : ''
          }`}>
          {num}
        </div>
      ))}
    </div>
  );
}
