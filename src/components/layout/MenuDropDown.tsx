import { HeaderMenuOptionType, HeaderMenuType } from '@/types/common';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

interface MenuDropDownProps {
  menu: HeaderMenuType;
}
export default function MenuDropDown({ menu }: MenuDropDownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    event.preventDefault();
    setIsOpen((prev) => !prev);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} onClick={toggleDropdown}>
      {menu.title}
      {isOpen && (
        <div className="absolute flex flex-col top-32 left-0 w-172 pt-18 pb-10 bg-white shadow-[2px_2px_14px_8px_rgba(0,0,0,0.1)] rounded z-50">
          {menu.option.map((option: HeaderMenuOptionType) => (
            <Link
              key={option.title}
              href={option.path as string}
              className="flex items-center h-36 px-16 text-13 text-gray-700 hover:bg-gray-100">
              {option.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
