import Image from 'next/image';

export default function PageLoading() {
  return (
    <div className="flex items-center justify-center">
      <Image src="/images/temp-page-loading.gif" alt="페이지 로딩중" width={150} height={95} />
    </div>
  );
}
