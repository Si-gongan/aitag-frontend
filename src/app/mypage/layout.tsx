import MypageSidemenu from '@/components/main/myPage/MypageSidemenu';

export default function MypageLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex justify-center w-full bg-[#FAFBFC] py-40 gap-42">
      <MypageSidemenu />
      {children}
    </div>
  );
}
