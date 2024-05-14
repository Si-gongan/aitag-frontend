'use client';

import ActionButtonGray from '@/components/common/button/ActionButtonGray';
import ActionButtonSkyBlue from '@/components/common/button/ActionButtonSkyBlue';
import { MYPAGE_SIDEMENU } from '@/utils/constants';
import { usePathname } from 'next/navigation';

export default function MypageSidemenu() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col gap-32 w-262 min-h-888 py-63 px-31 rounded-10 bg-white">
      {MYPAGE_SIDEMENU.map((menu) => {
        return pathname === menu.url ? (
          <ActionButtonSkyBlue key={menu.text} text={menu.text} size="w-200 h-54" />
        ) : (
          <ActionButtonGray key={menu.text} text={menu.text} size="w-200 h-54" />
        );
      })}
    </div>
  );
}
