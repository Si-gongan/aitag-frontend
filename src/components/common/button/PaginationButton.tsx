'use client';

import { PaginationType } from '@/types/common';
import Image from 'next/image';

interface PagenationButtonProps {
  pagination: PaginationType;
  setPagination: React.Dispatch<React.SetStateAction<{ start: number; click: number }>>;
  totalPages: number;
  onClick: (num: number) => void;
}

export default function PagenationButton({ pagination, setPagination, totalPages, onClick }: PagenationButtonProps) {
  const startPage = (Math.ceil(pagination.start / 10) - 1) * 10 + 1;
  const endPage = Math.min(startPage + 9, totalPages);
  const pageNumbers = Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index);

  const handleClick = (num: number) => {
    onClick(num);
  };

  const handleNext = () => {
    const newStartPage = startPage + 10;
    setPagination({ start: newStartPage, click: newStartPage });
  };

  const handlePrev = () => {
    const newStartPage = startPage - 10;
    const newClickPage = startPage - 1;
    setPagination({ start: newStartPage, click: newClickPage });
  };

  return (
    <div className="flex justify-between items-center w-full">
      <button className="flex items-center justify-center w-78 h-36" disabled={startPage == 1} onClick={handlePrev}>
        {startPage > 1 && (
          <span className="flex items-center gap-8 text-[#2E2E2E]">
            <Image
              src="/images/ic_round-navigate-before.svg"
              alt="다음 페이지로 가는 오른쪽 화살표 아이콘 버튼"
              width={20}
              height={20}
            />
            이전
          </span>
        )}
      </button>
      <div className="flex justify-center items-center gap-2">
        {pageNumbers.map((num) => (
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
      <button
        className="flex items-center justify-center w-78 h-36"
        disabled={endPage == totalPages}
        onClick={handleNext}>
        {endPage < totalPages && (
          <span className="flex items-center gap-8 text-[#2E2E2E]">
            다음
            <Image
              src="/images/ic_round-navigate-next.svg"
              alt="다음 페이지로 가는 오른쪽 화살표 아이콘 버튼"
              width={20}
              height={20}
            />
          </span>
        )}
      </button>
    </div>
  );
}
