// 'use client';

// import Checkbox from '@/components/common/input/Checkbox';
// import { URL_TABLE_HEADER } from '@/utils/constants';
// import Image from 'next/image';
// import { ChangeEvent, MouseEvent, useEffect, useState } from 'react';

// interface TableItemType {
//   urlAddress: string;
//   delete: string;
// }

// interface UrlListTableProps {
//   urls: string[];
//   initailItemKey?: string;
// }

// export default function UrlListTable({ urls, initailItemKey }: UrlListTableProps) {
//   const [selections, setSelections] = useState<Set<string>>(new Set());

//   const tableHeaderKey = URL_TABLE_HEADER.map((header) => header.value); // value 순서에 맞게 테이블 데이터를 출력하기 위한 배열
//   const itemKey = initailItemKey ?? tableHeaderKey[0];

//   const tableItems =
//     urls.map((url) => {
//       return {
//         urlAddress: url,
//         delete: '/images/mingcute_close-fill.svg',
//       };
//     }) || [];

//   const handleCheckboxChangeAll = (event) => {
//     if (event.target.checked) {
//       // if (event.target) {
//       const allCheckedSelection = new Set(tableItems.map((item) => item[itemKey as keyof TableItemType]));
//       setSelections(allCheckedSelection);
//     } else {
//       setSelections(new Set());
//     }
//   };

//   const isSelectedAll = () => {
//     return selections.size === tableItems.length && tableItems.length !== 0;
//   }; // 전체 선택 상태 여부

//   const handleCheckboxChange = (value: string) => {
//     console.log('클릭');
//     // 기존의 selection으로 새로운 Set 생성
//     const newSelection = new Set(selections);

//     if (newSelection.has(value)) {
//       newSelection.delete(value);
//     } else {
//       newSelection.add(value);
//     }

//     setSelections(newSelection);
//     console.log({ value });
//     console.log({ selections });
//   };

//   return (
//     <table>
//       <thead>
//         <tr>
//           <th>
//             <Checkbox checked={isSelectedAll()} onChange={handleCheckboxChangeAll} />
//           </th>
//           {URL_TABLE_HEADER.map((header, index) => (
//             <th key={index}>
//               {header.text} {header.image && <Image src={header.image} width={24} height={24} alt="url 삭제 이미지" />}
//             </th>
//           ))}
//         </tr>
//       </thead>
//       <tbody>
//         {Array.isArray(tableItems) &&
//           tableItems.map((item: TableItemType, index) => (
//             <tr key={index} className={`${selections.has(item[itemKey as keyof TableItemType]) ? 'bg-[#F2F6FE]' : ''}`}>
//               <td>
//                 <Checkbox
//                   checked={selections.has(item[itemKey as keyof TableItemType])}
//                   onChange={() => handleCheckboxChange(item[itemKey as keyof TableItemType])}
//                 />
//               </td>
//               {tableHeaderKey.map((key) => (
//                 <td key={key + index}>
//                   {key === 'delete' ? (
//                     <Image src={item[key]} width={24} height={24} alt="url 삭제 이미지" />
//                   ) : (
//                     item['urlAddress']
//                   )}
//                 </td>
//               ))}
//             </tr>
//           ))}
//       </tbody>
//     </table>
//   );
// }

'use client';

import Checkbox from '@/components/common/input/Checkbox';
import { URL_TABLE_HEADER } from '@/utils/constants';
import Image from 'next/image';
import { ChangeEvent, useState } from 'react';

interface TableItemType {
  urlAddress: string;
  delete: string;
}

interface UrlListTableProps {
  urls: string[];
  setUrls: React.Dispatch<React.SetStateAction<string[]>>;
  initailItemKey?: string;
  listNumber?: number;
}

export default function UrlListTable({ urls, setUrls, initailItemKey, listNumber = 5 }: UrlListTableProps) {
  const [selections, setSelections] = useState<Set<string>>(new Set());

  const tableHeaderKey = URL_TABLE_HEADER.map((header) => header.value); // value 순서에 맞게 테이블 데이터를 출력하기 위한 배열
  const itemKey = initailItemKey ?? tableHeaderKey[0];

  const tableItems =
    urls.map((url) => {
      return {
        urlAddress: url,
        delete: '/images/mingcute_close-fill.svg',
      };
    }) || [];

  const isSelectedAll = () => {
    return selections.size === tableItems.length && tableItems.length !== 0;
  }; // 전체 선택 상태 여부

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.stopPropagation();
    const value = event.target.value;

    if (value === 'all') {
      if (event.target.checked) {
        const allCheckedSelection = new Set(tableItems.map((item) => item[itemKey as keyof TableItemType]));
        setSelections(allCheckedSelection);
      } else {
        setSelections(new Set());
      }
    } else {
      // 기존의 selection으로 새로운 Set 생성
      const newSelection = new Set(selections);

      if (newSelection.has(value)) {
        newSelection.delete(value);
      } else {
        newSelection.add(value);
      }

      setSelections(newSelection);
    }
  };

  const handleClickDelete = (item: string) => {
    if (item === 'all') {
      console.log('전체삭제');
      setUrls([]);
    } else {
      const updatedUrls = urls.filter((url) => url !== item);
      setUrls(updatedUrls as React.SetStateAction<string[]>);
    }
  };

  return (
    <table className="border-1 border-#B0BAC9 text-grey/7">
      <thead className="bg-grey/0 h-64 border-b-1">
        <tr>
          <th className="w-124">
            <Checkbox checked={isSelectedAll()} value="all" onChange={handleCheckboxChange} />
          </th>
          {URL_TABLE_HEADER.map((header, index) => (
            <th key={index} className={`${header.image ? 'w-124' : 'px-12'}`}>
              {header.text}{' '}
              {header.image && (
                <div onClick={() => handleClickDelete('all')} className="flex justify-center items-center">
                  <Image src={header.image} width={24} height={24} alt="url 삭제 이미지" />
                </div>
              )}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {Array.isArray(tableItems) &&
          tableItems.map((item: TableItemType, index) => {
            if (index < listNumber) {
              return (
                <tr
                  key={index}
                  className={`h-48 border-b-1 ${
                    selections.has(item[itemKey as keyof TableItemType]) ? 'bg-[#F2F6FE]' : ''
                  }`}>
                  <td>
                    <Checkbox
                      checked={selections.has(item[itemKey as keyof TableItemType])}
                      value={item[itemKey as keyof TableItemType]}
                      onChange={handleCheckboxChange}
                    />
                  </td>
                  {tableHeaderKey.map((key) => (
                    <td key={key + index} className={`${key === 'delete' ? '' : 'px-12'}`}>
                      {key === 'delete' ? (
                        <div
                          onClick={() => handleClickDelete(item[itemKey as keyof TableItemType])}
                          className="flex justify-center items-center">
                          <Image src={item[key]} width={24} height={24} alt="url 삭제 이미지" />
                        </div>
                      ) : (
                        item['urlAddress']
                      )}
                    </td>
                  ))}
                </tr>
              );
            } else {
              return null; // index가 4보다 큰 경우에는 null 반환하여 렌더링하지 않음
            }
          })}
      </tbody>
    </table>
  );
}
