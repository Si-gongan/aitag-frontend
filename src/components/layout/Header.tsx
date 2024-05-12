'use client';
import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import ActionButton from '../common/button/ActionButton';
import { HEADER_MENU } from '@/utils/routes';
import Link from 'next/link';

interface User {
  name: string;
  profileImgUrl?: string;
  // 필요한 다른 속성들을 추가 가능
}

export default function Header() {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token') as string;
    const userInfo = localStorage.getItem('userInfo');
    if (userInfo) {
      setUser(JSON.parse(userInfo));
    } else {
      fetchUserInfo(token);
    }
  }, [pathname]);

  const fetchUserInfo = async (token: string) => {
    try {
      const response = await fetch('https://gongbang.sigongan-ai.shop/user/info', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem('userInfo', JSON.stringify(data.result.user));
        setUser(data.result.user as User);
      } else {
        throw new Error(data.message || '사용자 정보를 불러오는데 실패했습니다.');
      }
    } catch (error) {
      console.error('Error fetching user info:', (error as Error).message);
      setUser(null);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userInfo');
    setUser(null);
    router.push('/login');
  };

  const toggleDropdown = () => setIsOpen(!isOpen);
  const last_menu_num = HEADER_MENU.length - 1;

  return (
    <header className="sticky top-0 right-0 left-0 flex items-center justify-center h-63 z-sticky bg-white shadow-lg">
      <div className="flex justify-between w-full max-w-980 px-20">
        <Link href="/">
          <Image width={100} height={30} src="/images/logo-icon.svg" alt="Logo" />
        </Link>
        <div className="flex items-center">
          <ul className="flex items-center h-28 text-bold text-[#4D4D4D]">
            {HEADER_MENU.map((menu, index) => (
              <li key={index} className="px-16">
                <Link href={menu.path}>{menu.title}</Link>
                {index !== last_menu_num && <span className="h-14 w-1 bg-[#212121]" />}
              </li>
            ))}
          </ul>
          {user ? (
            <div className="flex items-center gap-4 h-28 pl-20">
              <div className="relative w-35 h-35 rounded-4 overflow-hidden">
                <Image
                  fill
                  src={user.profileImgUrl ? user.profileImgUrl : '/images/default-profile.jpeg'}
                  alt="유저 프로필 이미지"
                />
              </div>
              <div className="ml-5">{user.name} 님</div>
              <button
                onClick={toggleDropdown}
                className="flex items-center justify-center w-20 h-20 text-13 font-bold ml-8 text-gray bg-[#F9FAFB] rounded-[0.25rem]">
                <Image
                  src={isOpen ? '/images/arrow-line-s-t.svg' : '/images/arrow-line-s.svg'}
                  alt="화살표 모양의 유저 프로필 드롭다운 버튼"
                  width={16}
                  height={16}
                />
              </button>
              {isOpen && (
                <div className="absolute top-60 mt-2 py-2 w-117 bg-white shadow-xl rounded z-50">
                  <Link href="/mypage" className="block px-4 py-10 text-13 text-gray-700 hover:bg-gray-100">
                    마이페이지
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-10 text-13 text-gray-700 hover:bg-gray-100">
                    로그아웃
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link href="/login">
              <ActionButton text="시작하기" size="w-117 h-35 text-13 font-bold ml-20" />
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
