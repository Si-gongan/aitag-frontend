import PagenationButton from '@/components/common/button/PaginationButton';
import { PaginationType, PostType, WorkType } from '@/types/common';
import { formattedDate } from '@/utils/formattedDate';
import { getStatusText } from '@/utils/getStatusText';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface ListSectionProps {
  items: PostType[];
  sortId: string;
  pagination: PaginationType;
  setPagination: React.Dispatch<React.SetStateAction<PaginationType>>;
}

export default function ListSection({ items, sortId, pagination, setPagination }: ListSectionProps) {
  const router = useRouter();

  const getWorkfirstImage = (works: WorkType[]) => {
    const firstImage = works[0].image;
    const thumbnail = firstImage.startsWith('data:image') ? '/images/dashboard-default-icon.svg' : firstImage;

    return thumbnail;
  };

  const handleClickPagination = (num: number) => {
    setPagination((prevPagination) => ({
      ...prevPagination,
      click: num,
    }));
  };

  const handleClickToLink = (postId: string, sortId: string) => {
    if (sortId === 'inspect') {
      router.push(`/dashboard/${postId}/inspect`);
    } else {
      router.push(`/dashboard/${postId}`);
    }
  };

  return (
    <section className="flex flex-col gap-40">
      <div className="flex w-full flex-wrap gap-32 min-h-642">
        {items.map((item) => {
          const thumbnail = getWorkfirstImage(item.works);
          const isClickable = sortId === 'ai' && !item.isComplete;
          return (
            <div
              key={item.id}
              className="flex flex-col w-183 rounded-10 border-1 border-grey/1 overflow-hidden"
              onClick={isClickable ? undefined : () => handleClickToLink(item.id, sortId)}>
              <img
                src={thumbnail}
                alt="생성결과의 썸네일 이미지"
                className="w-183 h-183 overflow-hidden object-cover"
                decoding="async"
                loading="lazy"
              />
              <div
                className={`flex flex-col justify-between h-120 pt-18 pb-17 px-10  bg-grey/1 ${
                  item.target && item.target === 'ai' && item.isComplete === false ? 'text-grey/6' : 'text-grey/7'
                }`}>
                <div className="flex flex-col gap-8 text-12">
                  <h3 className="text-14 font-bold">{item.title}</h3>
                  생성일자 : {formattedDate(item.createdAt)}
                </div>
                <div className="flex justify-between items-center">
                  {getStatusText(item.isComplete, sortId)}
                  <Image
                    src={item.isComplete ? '/images/tabler_download.svg' : '/images/dashboard-loading.gif'}
                    alt="진행 상태 아이콘"
                    width={20}
                    height={20}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <PagenationButton pagination={pagination} onClick={handleClickPagination} />
    </section>
  );
}

// const getWorkfirstImage = (works: WorkType[]) => {
//   const firstImage = works[0].image;
//   const workAnswer = works[0].answer;
//   const thumbnail =
//     firstImage.startsWith('https://gongbang') && workAnswer !== 'ERROR!'
//       ? firstImage
//       : '/images/dashboard-default-image.png';
//   // const thumbnail = firstImage.includes('data:') ? '/images/dashboard-default-image.png' : firstImage;

//   return thumbnail;
// };
