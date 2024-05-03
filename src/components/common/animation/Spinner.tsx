import Image from 'next/image';

interface SpinnerProps {
  text?: string; // 진행중일때 나타나는 글자
  completionText?: string; // 완료됐을때 나타나는 글자
  width?: number;
  height?: number;
  loading?: boolean;
}

export default function Spinner({ text, completionText, width, height, loading = true }: SpinnerProps) {
  return (
    <div className="flex items-center justify-center gap-10 text-[#292D32] ">
      {loading ? (
        <Image
          src="/images/spin.gif"
          alt="로딩중 표시 이미지"
          width={width ? width : 24}
          height={height ? height : 24}
        />
      ) : (
        <Image
          src="/images/tick-circle.svg"
          alt="로딩완료 표시 이미지"
          width={width ? width : 24}
          height={height ? height : 24}
        />
      )}
      {loading ? text : completionText}
    </div>
  );
}
