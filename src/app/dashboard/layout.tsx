

import DashboradContextMain from "@/components/main/dashboard/DashboradContextMain";



export default function DashboardLayout({ children }:  Readonly<{ children: React.ReactNode }>) {
  return (
      <DashboradContextMain>{children}</DashboradContextMain>
  );
}
