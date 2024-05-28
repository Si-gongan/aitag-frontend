export default function NoticeLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <section className="flex flex-col items-center w-980 pt-40 gap-100 mb-125">
      <div className="flex flex-col items-center gap-16">
        <span className="text-18 text-[#B2B0B3]">NOTICE</span>
        <h1 className="text-36 text-grey/7 font-bold">공지사항</h1>
      </div>
      {children}
    </section>
  );
}
