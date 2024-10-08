'use client';

import AddKeywordsButton from '@/components/common/button/AddKeywordsButton';
import PagenationButton from '@/components/common/button/PaginationButton';
import Checkbox from '@/components/common/input/Checkbox';
import { PreviewImageItemType } from '@/types/common';
import { IMAGE_TABLE_HEADER } from '@/utils/constants';
import { useState } from 'react';
import ToneDropdown from './ToneDropdown';

interface ImageListTableProps {
  type?: string;
  previewImages: PreviewImageItemType[] | [];
  setPreviewImages: React.Dispatch<React.SetStateAction<PreviewImageItemType[]>>;
  setSelectedImages: React.Dispatch<React.SetStateAction<PreviewImageItemType[]>>;
  selectedUrls: string[];
  selectedImages: PreviewImageItemType[];
}

export default function ImageListTable({
  previewImages,
  setSelectedImages,
  selectedUrls,
  selectedImages,
}: ImageListTableProps) {
  const [pagination, setPagination] = useState({ start: 1, click: 1 });
  const totalPages = Math.ceil(previewImages.length / 5);

  const startIndex = (pagination.click - 1) * 5;
  const endIndex = pagination.click * 5;
  const tableHeaderKey = IMAGE_TABLE_HEADER.map((header) => header.value); // value 순서에 맞게 테이블 데이터를 출력하기 위한 배열

  const handleClickPagination = (num: number) => {
    setPagination((prevPagination) => ({
      ...prevPagination,
      click: num,
    }));
  };

  console.log(selectedImages);

  const handleCheck = (value: PreviewImageItemType) => {
    if (selectedImages.some((item) => item.src === value.src)) {
      setSelectedImages((prev) => prev.filter((item) => item.src !== value.src));
    } else {
      setSelectedImages((prev) => [...prev, value]);
    }
  };

  const handleCheckAll = () => {
    if (selectedImages.length === previewImages.length) {
      setSelectedImages([]);
    } else {
      setSelectedImages(previewImages);
    }
  };

  return (
    <>
      <table className="border-1 border-#B0BAC9 text-grey/7">
        <thead className="bg-grey/0 h-64 border-b-1">
          <tr>
            <th className="w-64">
              <Checkbox
                checked={selectedImages.length > 0 && selectedImages.length === previewImages.length}
                value="all"
                handleCheck={handleCheckAll}
              />
            </th>
            {IMAGE_TABLE_HEADER.map((header, index) => (
              <th
                key={index}
                className={`px-12 ${
                  header.value === 'image'
                    ? 'w-80'
                    : header.value === 'tone'
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
                    className={`h-48 border-b-1 ${selectedImages.some((image) => image.src === item.src) ? 'bg-[#F2F6FE]' : ''}`}>
                    <td>
                      <Checkbox
                        handleCheck={() => handleCheck(item)}
                        checked={selectedImages.some((image) => image.src === item.src)}
                        value={item.src}
                      />
                    </td>
                    {tableHeaderKey.map((key) => (
                      <td key={key + index}>
                        {key === 'image' ? (
                          <div className="flex justify-center items-center h-40 w-80 overflow-hidden">
                            <img
                              src={item.src}
                              alt={`이미지 미리보기 썸네일 ${index}`}
                              className="w-40 h-40 overflow-hidden border-1 rounded-2 border-grey/4"
                            />
                          </div>
                        ) : key === 'alt' ? (
                          <span className="p-12">{item.alt ? item.alt : '없음'}</span>
                        ) : key === 'tone' ? (
                          <ToneDropdown
                            item={item}
                            previewImages={previewImages}
                            setPreviewImages={setSelectedImages}
                          />
                        ) : // <span className="flex justify-center">한국어</span>
                        key === 'keyword' ? (
                          <div className="flex justify-center">
                            <AddKeywordsButton
                              item={item}
                              previewImages={previewImages}
                              setPreviewImages={setSelectedImages}
                            />
                          </div>
                        ) : (
                          item['src']
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
      <PagenationButton
        pagination={pagination}
        setPagination={setPagination}
        totalPages={totalPages}
        onClick={handleClickPagination}
      />
    </>
  );
}
