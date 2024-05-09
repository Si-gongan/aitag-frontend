'use client';

import AddKeywordsButton from '@/components/common/button/AddKeywordsButton';
import PagenationButton from '@/components/common/button/PaginationButton';
import Checkbox from '@/components/common/input/Checkbox';
import { PreviewImageItemType } from '@/types/common';
import { IMAGE_TABLE_HEADER } from '@/utils/constants';
import { useEffect, useState } from 'react';

interface ImageListTableProps {
  type?: string;
  previewImages: PreviewImageItemType[] | [];
  setPreviewImages: React.Dispatch<React.SetStateAction<PreviewImageItemType[]>>;
  selectedUrls: Set<string> | PreviewImageItemType[];
  selectedImages: PreviewImageItemType[] | [];
}

export default function ImageListTable({
  type = 'url',
  previewImages,
  setPreviewImages,
  selectedUrls,
  selectedImages,
}: ImageListTableProps) {
  const [pagination, setPagination] = useState({ start: 1, click: 1, total: 1 });

  const startIndex = (pagination.click - 1) * 5;
  const endIndex = pagination.click * 5;
  const tableHeaderKey = IMAGE_TABLE_HEADER.map((header) => header.value); // value 순서에 맞게 테이블 데이터를 출력하기 위한 배열

  const selectedItem = Array.isArray(selectedUrls) ? selectedUrls.map((item) => item.name) : Array.from(selectedUrls);

  const isSelectedAll = () => {
    if (selectedImages) {
      return selectedImages.length === previewImages.length && previewImages.length !== 0;
    }
    return false;
  };

  const handleClickPagination = (num: number) => {
    setPagination((prevPagination) => ({
      ...prevPagination,
      click: num,
    }));
  };

  useEffect(() => {
    setPagination((prevPagination) => ({
      ...prevPagination,
      total: Math.ceil(previewImages.length / 5),
    }));
  }, [previewImages]);

  return (
    <>
      <table className="border-1 border-#B0BAC9 text-grey/7">
        <thead className="bg-grey/0 h-64 border-b-1">
          <tr>
            <th className="w-64">
              <Checkbox checked={isSelectedAll()} value="all" disabled />
            </th>
            {IMAGE_TABLE_HEADER.map((header, index) => (
              <th
                key={index}
                className={`px-12 ${
                  header.value === 'image'
                    ? 'w-80'
                    : header.value === 'language'
                    ? 'w-176'
                    : header.value === 'keyword'
                    ? 'w-161'
                    : ''
                }`}>
                {header.text}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.isArray(previewImages) &&
            previewImages.map((item: PreviewImageItemType, index) => {
              if (startIndex <= index && index < endIndex) {
                return (
                  <tr
                    key={index}
                    className={`h-48 border-b-1 ${
                      selectedItem.some((url) => url === item.name) ? 'bg-[#F2F6FE]' : ''
                    }`}>
                    <td>
                      <Checkbox
                        checked={selectedItem.some((url) => url === item.name)}
                        value={item.image as string}
                        disabled
                      />
                    </td>
                    {tableHeaderKey.map((key) => (
                      <td key={key + index}>
                        {key === 'image' ? (
                          <div className="flex justify-center items-center">
                            <img
                              src={item.image}
                              alt={`이미지 미리보기 썸네일 ${index}`}
                              width={40}
                              height={40}
                              style={{
                                objectFit: 'cover',
                                overflow: 'hidden',
                                borderRadius: '2px',
                                border: 'border-grey/4',
                              }}
                            />
                          </div>
                        ) : key === 'alt' ? (
                          <span className="p-12">{item.alt ? item.alt : '없음'}</span>
                        ) : key === 'language' ? (
                          <span className="flex justify-center">한국어</span>
                        ) : key === 'keyword' ? (
                          <div className="flex justify-center">
                            <AddKeywordsButton
                              item={item}
                              previewImages={previewImages}
                              setPreviewImages={setPreviewImages}
                            />
                          </div>
                        ) : (
                          item['image']
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
      <PagenationButton pagination={pagination} onClick={handleClickPagination} />
    </>
  );
}
