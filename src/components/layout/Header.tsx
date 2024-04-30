import Image from 'next/image';
import ActionButton from '../common/button/ActionButton';
import { HEADER_MENU } from '@/utils/routes';
import Link from 'next/link';

export default function Header() {
  const last_menu_num = HEADER_MENU.length - 1;

  return (
    <header className="sticky top-0 right-0 left-0 flex items-center justify-center h-63 z-sticky bg-white">
      <div className="flex justify-between items-center w-full max-w-980 px-20">
        <Image
          width={100}
          height={30}
          src="/images/logo-icon.svg"
          alt="글공방 로고 이미지 또는 글공방 메인 홈으로 가기 버튼"
        />
        <div className="flex items-center">
          <ul className="flex items-center h-28 text-bold text-[#4D4D4D]">
            {HEADER_MENU.map((menu, index) => {
              return (
                <Link href={menu.path} key={index} className="flex items-center">
                  <li className="flex justify-center items-center px-16">{menu.title}</li>
                  {index !== last_menu_num && <span className="h-14 w-1 bg-[#212121]" />}
                </Link>
              );
            })}
          </ul>
          <Link href="/login">
            <ActionButton text="시작하기" size="w-117 h-35 text-13 font-bold ml-20" />
          </Link>
        </div>
      </div>
    </header>
  );
}
