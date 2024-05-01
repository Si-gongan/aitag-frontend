'use client';

import ActionButtonSkyBlue from '@/components/common/button/ActionButtonSkyBlue';
import Checkbox from '@/components/common/input/Checkbox';
import { TABLE_BODY_NUMBER, URL_TABLE_HEADER } from '@/utils/constants';
import Image from 'next/image';
import { ChangeEvent, useEffect, useState } from 'react';

interface TableItemType {
  urlAddress: string;
  delete: string;
}

interface UrlListTableProps {
  urls: string[];
  setUrls: React.Dispatch<React.SetStateAction<string[]>>;
  selectedUrls: Set<string>;
  setSelectedUrls: React.Dispatch<React.SetStateAction<Set<string>>>;
}

export default function UrlListTable({ urls, setUrls, selectedUrls, setSelectedUrls }: UrlListTableProps) {
  const [listNumber, setListNumber] = useState<number>(TABLE_BODY_NUMBER.URL_LIST);

  const tableHeaderKey = URL_TABLE_HEADER.map((header) => header.value); // value 순서에 맞게 테이블 데이터를 출력하기 위한 배열
  const itemKey = tableHeaderKey[0];
  const tableItems =
    urls.map((url) => {
      return {
        urlAddress: url,
        delete: '/images/mingcute_close-fill.svg',
      };
    }) || [];
  const overListNumber = urls.length > listNumber;

  const isSelectedAll = () => {
    if (selectedUrls) {
      return selectedUrls.size === tableItems.length && tableItems.length !== 0;
    }
    return false;
  }; // 전체 선택 상태 여부

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.stopPropagation();
    const value = event.target.value;

    if (value === 'all') {
      if (event.target.checked) {
        const allCheckedSelection = new Set(tableItems.map((item) => item[itemKey as keyof TableItemType]));
        setSelectedUrls(allCheckedSelection);
      } else {
        setSelectedUrls(new Set());
      }
    } else {
      // 기존의 selection으로 새로운 Set 생성
      const newSelection = new Set(selectedUrls);

      if (newSelection.has(value)) {
        newSelection.delete(value);
      } else {
        newSelection.add(value);
      }

      setSelectedUrls(newSelection);
    }
  };

  const handleClickDelete = (item: string) => {
    if (item === 'all') {
      setUrls([]);
    } else {
      const updatedUrls = urls.filter((url) => url !== item);
      setUrls(updatedUrls as React.SetStateAction<string[]>);
    }
  };

  const handleClickMore = () => {
    setListNumber(listNumber + 5);
  };

  return (
    <>
      <table className="border-1 border-#B0BAC9 text-grey/7">
        <thead className="bg-grey/0 h-64 border-b-1">
          <tr>
            <th className="w-124">
              <Checkbox checked={isSelectedAll()} value="all" onChange={handleCheckboxChange} />
            </th>
            {URL_TABLE_HEADER.map((header, index) => (
              <th key={index} className={`${header.image ? 'w-124' : 'px-12'}`}>
                {header.text}{' '}
                {header.image && isSelectedAll() && (
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
                      selectedUrls.has(item[itemKey as keyof TableItemType]) ? 'bg-[#F2F6FE]' : ''
                    }`}>
                    <td>
                      <Checkbox
                        checked={selectedUrls.has(item[itemKey as keyof TableItemType])}
                        value={item.urlAddress}
                        onChange={handleCheckboxChange}
                      />
                    </td>
                    {tableHeaderKey.map((key) => (
                      <td key={key + index} className={`${key === 'delete' ? '' : 'p-12'}`}>
                        {key === 'delete' ? (
                          <div
                            onClick={() => handleClickDelete(item.urlAddress)}
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
                return null;
              }
            })}
        </tbody>
      </table>
      {overListNumber && <ActionButtonSkyBlue text="더보기" size="h-54 w-full" onClick={handleClickMore} />}
    </>
  );
}
