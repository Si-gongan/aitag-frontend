import { WorkType } from '@/types/common';
import { DOWNLOAD_SORT } from '@/utils/constants';
import exportAltText from '@/utils/exportData';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

interface DonwloadDropdownProps {
  type?: 'icon' | 'button';
  selectedWorks: WorkType[];
  disabled: boolean;
}

export default function DownloadDropdown({ type = 'button', selectedWorks, disabled }: DonwloadDropdownProps) {
  const [showDropDown, setShowDropDown] = useState(false);

  const outRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = (event: React.MouseEvent<HTMLButtonElement | HTMLImageElement>) => {
    event.stopPropagation();
    event.preventDefault();
    setShowDropDown((prev) => !prev);
  };

  const handleClickExport = (exportForm: 'csv' | 'txt' | 'json') => {
    toggleDropdown;
    exportAltText(exportForm, selectedWorks);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (outRef.current && !outRef.current.contains(e.target as Node)) {
        setShowDropDown(false);
      }
    };

    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  return (
    <div ref={outRef} className="relative cursor-pointer">
      {type === 'button' ? (
        <button
          onClick={toggleDropdown}
          disabled={disabled}
          className={`flex items-center justify-between w-158 h-54 pl-24 pr-12 rounded-4 ${disabled ? 'bg-[#C9D9FB]' : 'bg-brand/mainblue-0'}`}>
          <div className="text-white">다운로드</div>
          <Image
            src={showDropDown ? '/images/arrow-line-s-t-white.svg' : '/images/arrow-line-s-white.svg'}
            alt="분류 드롭 박스 여닫는 버튼"
            width={26}
            height={26}
          />
        </button>
      ) : (
        <Image
          src="/images/tabler_download.svg"
          alt="다운로드 아이콘"
          width={20}
          height={20}
          onClick={toggleDropdown}
        />
      )}
      {showDropDown && (
        <div
          className={`absolute -right-0.5 flex flex-col bg-white rounded-4 border-1 border-grey/4 z-dropdown ${type === 'button' ? 'top-56  w-158' : 'top-30 w-88'}`}>
          {DOWNLOAD_SORT.map((sort) => (
            <div
              key={sort.id}
              onClick={() => handleClickExport(sort.id)}
              className="flex items-center w-full pl-24 h-50 text-grey/7 hover:bg-slate-100">
              {sort.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
