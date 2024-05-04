'use client';

import { CREATE_TABS } from '@/utils/constants';
import { usePathname, useRouter } from 'next/navigation';
import { PATH } from '@/utils/routes';

export default function Tabs() {
  const router = useRouter();
  const pathname = usePathname();
  const parts = pathname.split('/');
  const page = parts[2];

  const handleClickTabs = (id: string) => {
    if (id === 'url') {
      router.push(PATH.CREATE_URL);
    } else {
      router.push(PATH.CREATE_IMAGE);
    }
  };

  return (
    <div className="flex w-980 h-52 border-1 border-grey/3 text-[#212121]">
      {CREATE_TABS.map((tab, index) => (
        <div
          key={tab.id}
          className={`flex items-center justify-center w-1/2 h-full ${index === 0 ? 'border-r-1 border-grey/3' : ''} ${
            page === tab.id && 'bg-grey/1'
          }`}
          onClick={() => handleClickTabs(tab.id)}>
          {tab.title}
        </div>
      ))}
    </div>
  );
}
