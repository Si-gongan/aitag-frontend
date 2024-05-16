import { GetUserInfoType } from '@/types/common';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { Path } from 'react-router-dom';

interface ProfileDropDownProps {
  user: GetUserInfoType;
  handleLogout: () => void;
}

export default function ProfileDropDown({ user, handleLogout }: ProfileDropDownProps) {
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
    <div className="flex items-center gap-4 h-28 pl-20" onClick={toggleDropdown} ref={dropdownRef}>
      <div className="relative w-35 h-35 rounded-4 overflow-hidden">
        <Image
          fill
          src={user.profileImgUrl ? user.profileImgUrl : '/images/default-profile.jpeg'}
          alt="유저 프로필 이미지"
        />
      </div>
      <div className="ml-5">{user.name} 님</div>
      <button className="flex items-center justify-center w-20 h-20 text-13 font-bold ml-8 text-gray bg-[#F9FAFB] rounded-[0.25rem]">
        <Image
          src={isOpen ? '/images/arrow-line-s-t.svg' : '/images/arrow-line-s.svg'}
          alt="화살표 모양의 유저 프로필 드롭다운 버튼"
          width={16}
          height={16}
        />
      </button>
      {isOpen && (
        <div className="absolute top-60 w-172 pt-18 pb-10 bg-white shadow-[2px_2px_14px_8px_rgba(0,0,0,0.1)] rounded z-50">
          <Link href="/mypage" className="flex items-center h-36 px-16 text-13 text-gray-700 hover:bg-gray-100">
            마이페이지
          </Link>
          <button
            onClick={handleLogout}
            className="flex items-center w-full h-36 px-16 text-13 text-gray-700 hover:bg-gray-100">
            로그아웃
          </button>
        </div>
      )}
    </div>
  );
}
