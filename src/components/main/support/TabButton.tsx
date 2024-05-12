import { SupportTabType } from '@/types/common';
import { SUPPORT_TAB } from '@/utils/constants';
import { useRouter } from 'next/navigation';

interface TabButtonProps {
  page: SupportTabType;
  setPage: React.Dispatch<React.SetStateAction<SupportTabType>>;
}

export default function TabButton({ page, setPage }: TabButtonProps) {
  const router = useRouter();

  const handleClick = (tab: SupportTabType) => {
    setPage(tab);
    router.push(`/support/${tab.id}`);
  };

  return (
    <ul className="flex items-center gap-14 cursor-pointer">
      {SUPPORT_TAB.map((tab) => (
        <li
          key={tab.id}
          className={`relative flex items-center justify-center pt-12 pb-13 text-18 font-medium ${
            page.id === tab.id
              ? 'left-0 duration-200 ease-in absolute block w-106 h-51 rounded-full appearnce-none text-primary-500 bg-white border-1 border-primary-500'
              : 'righet-0 absolute block w-73 h-51 rounded-full text-white'
          }`}
          onClick={() => handleClick(tab)}>
          {tab.text}
        </li>
      ))}
    </ul>
  );
}
