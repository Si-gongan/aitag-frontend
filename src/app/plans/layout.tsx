import Footer from '@/components/layout/Footer';
import PlansImageSection from '@/components/main/plans/PlansImageSection';

export default function PlansLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="flex flex-col items-center">
      <PlansImageSection />
      {children}
      <Footer />
    </main>
  );
}
