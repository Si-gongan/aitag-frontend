import Image from 'next/image';
import { useState } from 'react';

export default function AiOrInspectDropdown({}) {
  const [showDropDown, setShowDropDown] = useState(false);

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
        <Image
          src={showDropDown ? '/images/arrow-line-s-t.svg' : '/images/arrow-line-s.svg'}
          alt="분류 드롭 박스 여닫는 버튼"
          width={26}
          height={26}
        />
      </button>
    </div>
  );
}
