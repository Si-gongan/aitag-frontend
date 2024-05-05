import { DashbaordSortType } from '@/types/common';
import { DASHBOARD_SORT } from '@/utils/constants';
import Image from 'next/image';
import { useState } from 'react';

interface SortDropdownProps {
  sort: DashbaordSortType;
  setSort: React.Dispatch<React.SetStateAction<DashbaordSortType>>;
  onClick: (sortItem: DashbaordSortType) => void;
}

export default function SortDropdown({ sort, setSort, onClick }: SortDropdownProps) {
  const [showDropDown, setShowDropDown] = useState(true);

  const toggleDropdown = () => setShowDropDown((prev) => !prev);

  return (
    <>
      <div
        onClick={toggleDropdown}
        className="relative flex items-center justify-between w-158 h-54 pl-24 pr-12 rounded-4 border-1 border-grey/4">
        <div className="text-grey/7">{sort.name}</div>
        <Image
          src={showDropDown ? '/images/arrow-line-s-t.svg' : '/images/arrow-line-s.svg'}
          alt="분류 드롭 박스 여닫는 버튼"
          width={26}
          height={26}
        />
        {showDropDown && (
          <div className="absolute top-52 -right-0.5 flex flex-col w-158 bg-[#FAFBFC] rounded-4 border-1 border-grey/4 z-dropdown">
            {DASHBOARD_SORT.map((sortItem) => (
              <div
                key={sortItem.id}
                onClick={() => {
                  onClick(sortItem);
                  toggleDropdown;
                }}
                className={`flex items-center w-full pl-24 h-50 text-grey/7 hover:bg-slate-100 ${
                  sort.id === sortItem.id ? 'bg-slate-200' : ''
                }`}>
                {sortItem.name}
              </div>
            ))}{' '}
          </div>
        )}
      </div>
    </>
  );
}
