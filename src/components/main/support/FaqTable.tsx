import { FaqItemType, PaginationType, SupportType } from '@/types/common';
import { FAQ_HEADER } from '@/utils/constants';
import { formattedDateV2 } from '@/utils/formattedDate';
import PagenationButton from '@/components/common/button/PaginationButton';
import ActionButtonSkyBlue from '@/components/common/button/ActionButtonSkyBlue';
import { useState } from 'react';
import ModalSupport from '@/components/common/modal/ModalSupport';
import { getToken } from '@/utils/getToken';

interface FaqTableProps {
  faqs: SupportType[];
  pagination: PaginationType;
  setPagination: React.Dispatch<React.SetStateAction<PaginationType>>;
  totalPages: number;
}

export default function FaqTable({ faqs, pagination, setPagination, totalPages }: FaqTableProps) {
  const [showModalSupport, setShowModalSupport] = useState<boolean>(false);

  const items: FaqItemType[] =
    faqs &&
    faqs.map((faq, index) => {
      const formattedDate = formattedDateV2(faq.createdAt);
      return {
        index: (pagination.click - 1) * 5 + index + 1,
        title: faq.title,
        writer: faq.writer,
        createdAt: formattedDate,
      };
    });

  const headerKey = FAQ_HEADER.map((header) => header.value);

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
      setShowModalSupport(true);
    }
  };

  return (
    <div className="flex flex-col gap-28">
      <table className="border-t-2 border-b-2 border-grey/4 w-980">
        <thead>
          <tr className="flex h-66">
            {FAQ_HEADER.map((header) => (
              <th
                key={header.value}
                className={`flex items-center justify-center text-grey/7 text-16 font-normal ${
                  header.value === 'index' ? 'w-70' : header.value === 'title' ? 'grow' : 'w-150'
                }`}>
                {header.text}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {items &&
            items.map((item, index) => (
              <tr key={item.index} className="flex w-full h-75 border-t-1 text-grey/7 text-16 font-normal">
                {headerKey.map((key) => (
                  <td
                    key={key + (index + 1)}
                    className={`flex items-center  ${
                      key === 'index' ? 'justify-center w-70' : key === 'title' ? 'pl-10 grow' : 'justify-center w-150'
                    }`}>
                    {item[key]}
                  </td>
                ))}
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
      {showModalSupport && <ModalSupport onClose={() => setShowModalSupport(false)} />}
    </div>
  );
}
