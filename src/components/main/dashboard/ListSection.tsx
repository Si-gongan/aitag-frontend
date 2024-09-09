import PagenationButton from '@/components/common/button/PaginationButton';
import { PostType, WorkType } from '@/types/common';
import { formattedDate } from '@/utils/formattedDate';
import { getStatusText } from '@/utils/getStatusText';
import { PATH } from '@/utils/routes';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import { useContext } from 'react';
import { DashboardContext } from './DashboradContextMain';
import DownloadDropdown from './DownloadDropdown';

interface ListSectionProps {
  items: PostType[];
  totalPages: number;
}

export default function ListSection({ items, totalPages }: ListSectionProps) {
  const { push } = useRouter();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);

  let { sort, pagination, setPagination, searchValue } = useContext(DashboardContext);

  const getWorkfirstImage = (works: WorkType[]) => {
    const firstImage = works[0].image;
    const thumbnail = firstImage.startsWith('data:image') ? '/images/dashboard-default-icon.svg' : firstImage;

    return thumbnail;
  };

  const handleClickPagination = (num: number) => {
    params.set('sort', sort.id);
    if (searchValue) {
      params.set('search', searchValue);
    }
    params.set('page', String(num));

    push(`${PATH.DASHBOARD}?${params.toString()}`);
    setPagination((prev) => ({
      ...prev,
      click: num,
    }));
  };

  const handleClickToLink = (item: PostType, sortId: string) => {
    const isUnclickable = sortId === 'ai' && !item.isComplete;
    if (isUnclickable) return;

    if (sortId === 'inspect') {
      push(`/dashboard/${item.id}/inspect`);
    } else {
      push(`/dashboard/${item.id}`);
    }
  };

  return (
    <section className="flex flex-col gap-40">
      <div className="flex w-full flex-wrap gap-32 min-h-642">
        {items.map((item) => {
          const thumbnail = getWorkfirstImage(item.works);

          return (
            <div key={item.id} className="flex flex-col w-183 rounded-10 border-1 border-grey/1">
              <img
                src={thumbnail}
                alt="생성결과의 썸네일 이미지"
                className="w-183 h-183 overflow-hidden object-cover cursor-pointer rounded-t-10"
                decoding="async"
                loading="lazy"
                onClick={() => handleClickToLink(item, sort.id)}
              />
              <div
                className={`flex flex-col justify-between h-120 pt-18 pb-17 px-10  bg-grey/1 rounded-b-10 ${
                  item.target && item.target === 'ai' && item.isComplete === false ? 'text-grey/6' : 'text-grey/7'
                }`}>
                <div className="flex flex-col gap-8 text-12">
                  <h3 className="text-14 font-bold cursor-pointer" onClick={() => handleClickToLink(item, sort.id)}>
                    {item.title}
                  </h3>
                  생성일자 : {formattedDate(item.createdAt)}
                </div>
                <div className="flex justify-between items-center">
                  {getStatusText(item.isComplete, sort.id)}
                  {item.isComplete ? (
                    <DownloadDropdown type="icon" selectedWorks={item.works} disabled={false} />
                  ) : item.target === 'ai' ? (
                    <Image src="/images/dashboard-loading.gif" alt="진행 상태 아이콘" width={20} height={20} />
                  ) : <></>}
                  {/* <Image
                    src={item.isComplete ? '/images/tabler_download.svg' : '/images/dashboard-loading.gif'}
                    alt="진행 상태 아이콘"
                    width={20}
                    height={20}
                    // onClick={() => show}
                  /> */}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <PagenationButton
        onClick={handleClickPagination}
        pagination={pagination}
        setPagination={setPagination}
        totalPages={totalPages}
      />
    </section>
  );
}
