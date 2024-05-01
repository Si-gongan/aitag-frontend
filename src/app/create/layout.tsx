import ImageSection from '@/components/main/create/ImageSection';

export default function CreateLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="flex flex-col items-center">
      <ImageSection />
      {children}
    </main>
  );
}
