import { SupportType } from '@/types/common';
import { formattedDateV3 } from '@/utils/formattedDate';
import { NOTICE_HEADER } from '@/utils/constants';

interface NoticeTableProps {
  notices?: SupportType[];
}

export default function NoticeTable({ notices }: NoticeTableProps) {
  const items =
    notices &&
    notices.map((notice, index) => {
      const formattedDate = formattedDateV3(notice.createdAt);

      return {
        createdAt: formattedDate,
        title: notice.title,
      };
    });

  const headerKey = NOTICE_HEADER.map((header) => header.value);

  return (
    <table className="border-t-2 border-grey/7 border-b-2 w-980">
      <thead>
        <tr className="hidden">
          {NOTICE_HEADER.map((header) => (
            <th key={header.value} className="hidden">
              {header.text}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {items &&
          items.map((item, index) => (
            <tr key={index} className="flex justify-start items-center h-144 text-grey/7 border-b-1 border-b-grey/4">
              {headerKey.map((key) => (
                <td key={key + index}>
                  {key === 'createdAt' ? (
                    <div className="flex flex-col justify-center items-center h-144 w-95 text-center">
                      <p className="h-56 text-40 font-bold">{item.createdAt.date}</p>
                      <p className="text-grey/6 font-medium">{item.createdAt.yearmonth}</p>
                    </div>
                  ) : (
                    <p className="pl-30 pr-16 border-l-1 border-l-grey/4 grow text-18">{item.title}</p>
                  )}
                </td>
              ))}
            </tr>
          ))}
      </tbody>
    </table>
  );
}
