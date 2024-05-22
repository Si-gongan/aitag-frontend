import { ReactNode } from 'react';

interface SectionLayoutProps {
  title?: string;
  description?: string;
  children: ReactNode;
}

export default function SectionLayout({ title, description, children }: SectionLayoutProps) {
  return (
    <section className="relative flex flex-col gap-20 w-full">
      <div className="flex flex-col gap-10">
        {title && <h2 className="text-18 font-bold text-grey/7">{title}</h2>}
        {description && <p className="font-bole text-grey/6">{description}</p>}
      </div>
      {children}
    </section>
  );
}
