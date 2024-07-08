import Image from 'next/image';

export default function PlansImageSection() {
  return (
    <section className="relative flex justify-center items-center w-full h-357">
      <Image
        src="/images/plansImage.png"
        alt="요금제 페이지 배너"
        fill
        sizes="100vw"
        style={{ objectFit: 'cover' }}
        placeholder="blur"
        blurDataURL="/images/plansImage.png"
      />
      <div className="absolute w-full max-w-980 flex flex-col gap-30 text-white">
        <h1 className="text-52 font-bold">요금제</h1>
        <p className="text-18 leading-[27px]">
          Credit을 사용하여 에이택 서비스를 이용해보세요.
          <br />한 이미지당 AI 생성은 1 credit, 해설진 검수는 6 credit, 해설진 작성은 20 credit이 필요합니다.
        </p>
      </div>
    </section>
  );
}
