import { FaqContentType, FaqItemType, PaginationType, SupportType } from '@/types/common';
import PagenationButton from '@/components/common/button/PaginationButton';
import ActionButtonSkyBlue from '@/components/common/button/ActionButtonSkyBlue';
import { useState } from 'react';
import { getToken } from '@/utils/getToken';
import FaqTableItem from './FaqTableItem';
import ModalOpinion from '@/components/common/modal/ModalOpinion';

interface FaqTableProps {
  faqs: SupportType[];
  pagination: PaginationType;
  setPagination: React.Dispatch<React.SetStateAction<PaginationType>>;
  totalPages: number;
}

export default function FaqTable({ faqs, pagination, setPagination, totalPages }: FaqTableProps) {
  const [showModalOpinion, setShowModalOpinion] = useState<boolean>(false);

  const items: FaqItemType[] =
    faqs &&
    faqs.map((faq) => {
      return {
        title: faq.title,
        content: faq.content as FaqContentType[],
      };
    });

  const handleClickPagination = (num: number) => {
    setPagination((prevPagination) => ({
      ...prevPagination,
      click: num,
    }));
  };

  const handleClick = async () => {
    const token = await getToken();
    if (!token) {
      alert('로그인이 필요합니다!');
    } else {
      setShowModalOpinion(true);
    }
  };

  return (
    <div className="flex flex-col gap-28">
      <table className="border-t-2 border-b-2 border-grey/4 w-980">
        <tbody>
          {items &&
            items.map((item, index) => (
              <tr key={index} className="flex w-full border-t-1 text-grey/7 text-16 font-normal">
                <FaqTableItem item={item} />
              </tr>
            ))}
        </tbody>
      </table>
      <PagenationButton
        pagination={pagination}
        setPagination={setPagination}
        totalPages={totalPages}
        onClick={handleClickPagination}
      />
      <div className="flex justify-end">
        <ActionButtonSkyBlue text="고객센터 문의하기" size="w-150 h-54" onClick={handleClick} />
      </div>
      {showModalOpinion && <ModalOpinion onClose={() => setShowModalOpinion(false)} />}
    </div>
  );
}
