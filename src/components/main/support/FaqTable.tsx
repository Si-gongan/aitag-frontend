import { FaqContentType, FaqItemType, PaginationType, SupportType } from '@/types/common';
import PagenationButton from '@/components/common/button/PaginationButton';
import FaqTableItem from './FaqTableItem';

interface FaqTableProps {
  faqs: SupportType[];
  pagination: PaginationType;
  setPagination: React.Dispatch<React.SetStateAction<PaginationType>>;
  totalPages: number;
}

export default function FaqTable({ faqs, pagination, setPagination, totalPages }: FaqTableProps) {
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
    </div>
  );
}
