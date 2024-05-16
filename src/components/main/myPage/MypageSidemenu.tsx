'use client';

import ActionButtonGray from '@/components/common/button/ActionButtonGray';
import ActionButtonSkyBlue from '@/components/common/button/ActionButtonSkyBlue';
import { MYPAGE_SIDEMENU } from '@/utils/constants';
import { PATH } from '@/utils/routes';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';

export default function MypageSidemenu() {
  const pathname = usePathname();
  const router = useRouter();

  const handleClickSideMenu = () => {
    if (pathname === PATH.MYPAGE) {
      router.push(PATH.MYPAGE_PAYMENT);
    } else {
      router.push(PATH.MYPAGE);
    }
  };

  return (
    <div className="flex flex-col gap-32 w-262 min-h-888 py-63 px-31 rounded-10 bg-white">
      {MYPAGE_SIDEMENU.map((menu) => {
        return pathname === menu.url ? (
          <ActionButtonSkyBlue key={menu.text} text={menu.text} size="w-200 h-54" onClick={handleClickSideMenu} />
        ) : (
          <ActionButtonGray key={menu.text} text={menu.text} size="w-200 h-54" onClick={handleClickSideMenu} />
        );
      })}
    </div>
  );
}
