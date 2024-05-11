import SupportImageSection from '@/components/main/support/SupportImageSection';

export default function SupportLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="flex flex-col items-center">
      <SupportImageSection />
      {children}
    </main>
  );
}
