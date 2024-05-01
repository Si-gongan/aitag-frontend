import Image from 'next/image';

export default function ImageSection() {
  return (
    <div className="relative flex justify-center items-center h-429 w-full ">
      <div className="absolute flex flex-col justify-center items-center gap-16 z text-white">
        <h3 className="text-16 font-bold lineHeight-24">대체텍스트 생성</h3>
        <h1 className="text-40 font-bold lineHeight-60 mb-16">웹사이트 URL로 대체텍스트 생성하기</h1>
        <p className="lineHieght-21 text-center">
          대체텍스트 생성을 원하는 웹사이트의 URL주소를 입력한 후,
          <br /> 대체텍스트 생성이 필요한 이미지를 선택해주세요.
        </p>
      </div>
      <Image
        src="/images/create_main.png"
        layout="fill"
        objectFit="cover"
        alt="대체텍스트 생성과 관련된 필기하는 비즈니스맨 이미지"
      />
    </div>
  );
}
