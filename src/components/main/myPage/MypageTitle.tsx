interface MypageTitleProps {
  title: string;
  description: string;
}

export default function MypageTitle({ title, description }: MypageTitleProps) {
  return (
    <section className="flex flex-col w-full gap-10 font-bold text-grey/7">
      <h1 className="text-36 text-grey/7">{title}</h1>
      <p className="text-14">{description}</p>
    </section>
  );
}
