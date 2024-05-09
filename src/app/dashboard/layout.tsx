export default function DashboardLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <main className="flex flex-col items-center bg-[#FAFBFC]">{children}</main>;
}
