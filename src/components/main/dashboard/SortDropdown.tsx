import { DashbaordSortType } from '@/types/common';
import { DASHBOARD_SORT, ISPECT_SORT } from '@/utils/constants';
import Image from 'next/image';
import { useState } from 'react';

interface SortDropdownProps {
  type?: string;
  sort: DashbaordSortType;
  onClick: (sortItem: DashbaordSortType) => void;
}

export default function SortDropdown({ type = '', sort, onClick }: SortDropdownProps) {
  const [showDropDown, setShowDropDown] = useState(false);

  const datas = type === 'inspect' ? ISPECT_SORT : DASHBOARD_SORT;

  const toggleDropdown = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    event.preventDefault();
    setShowDropDown((prev) => !prev);
  };

  const handleBlur = () => {
    setTimeout(() => {
      setShowDropDown(false);
    }, 150);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        onBlur={handleBlur}
        className="flex items-center justify-between w-158 h-54 pl-24 pr-12 rounded-4 border-1 border-grey/4">
        <div className="text-grey/7">{sort.name}</div>
        <Image
          src={showDropDown ? '/images/arrow-line-s-t.svg' : '/images/arrow-line-s.svg'}
          alt="분류 드롭 박스 여닫는 버튼"
          width={26}
          height={26}
        />
      </button>
      {showDropDown && (
        <div className="absolute top-56 -right-0.5 flex flex-col w-158 bg-[#FAFBFC] rounded-4 border-1 border-grey/4 z-dropdown">
          {datas.map((data) => (
            <div
              key={data.id}
              onClick={() => {
                onClick(data);
                toggleDropdown;
              }}
              className={`flex items-center w-full pl-24 h-50 text-grey/7 hover:bg-slate-100 ${
                sort.id === data.id ? 'bg-slate-200' : ''
              }`}>
              {data.name}
            </div>
          ))}{' '}
        </div>
      )}
    </div>
  );
}
