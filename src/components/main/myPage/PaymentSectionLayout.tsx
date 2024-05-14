export default function PaymentSectionLayout({
  title,
  children,
}: Readonly<{ title: string; children: React.ReactNode }>) {
  return (
    <section className="flex flex-col gap-22">
      <h2 className="text-16 font-bold text-[#2C2C2C]">{title}</h2>
      <div className="flex w-full gap-18">{children}</div>
    </section>
  );
}
