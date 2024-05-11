import Footer from '@/components/layout/Footer';
import SupportImageSection from '@/components/main/support/SupportImageSection';

export default function SupportLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="flex flex-col items-center">
      <SupportImageSection />
      {children}
      <Footer />
    </main>
  );
}
