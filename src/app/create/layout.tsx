import ImageSection from '@/components/main/create/ImageSection';
import Tabs from '@/components/main/create/Tabs';

export default function CreateLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="flex flex-col items-center">
      <ImageSection />
      <Tabs />
      {children}
    </main>
  );
}
