export default function PlansImageSection() {
  return (
    <section className="w-full flex justify-center items-center h-357 bg-[url('/images/plansImage.png')] bg-cover bg-center">
      <div className="w-full max-w-980 flex flex-col gap-30 text-white">
        <h1 className="text-52 font-bold">요금제</h1>
        <p className="text-18 leading-[27px]">
          Credit을 사용하여 글공방 서비스를 이용해보세요.
          <br />한 이미지당 AI 생성은 1 credit, 해설진 검수는 6 credit, 해설진 작성은 20 credit이 필요합니다.
        </p>
      </div>
    </section>
  );
}
