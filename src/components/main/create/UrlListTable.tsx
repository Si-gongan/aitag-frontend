'use client';

import PagenationButton from '@/components/common/button/PaginationButton';
import Checkbox from '@/components/common/input/Checkbox';
import ModalChoose from '@/components/common/modal/ModalChoose';
import { PreviewImageItemType } from '@/types/common';
import { URL_TABLE_HEADER } from '@/utils/constants';
import Image from 'next/image';
import { useState } from 'react';

interface UrlListTableProps {
  urls: string[];
  setUrls: React.Dispatch<React.SetStateAction<string[]>>;
  selectedUrls: string[];
  setSelectedUrls: React.Dispatch<React.SetStateAction<string[]>>;
  selectedImages: PreviewImageItemType[];
  setSelectedImages: React.Dispatch<React.SetStateAction<PreviewImageItemType[]>>;
  previewImages: PreviewImageItemType[];
}

export default function UrlListTable({
  urls,
  setUrls,
  selectedUrls,
  setSelectedUrls,
  selectedImages,
  setSelectedImages,
  previewImages,
}: UrlListTableProps) {
  const [pagination, setPagination] = useState({ start: 1, click: 1 });
  const [showModalDelete, setShowModalDelete] = useState<boolean>(false);

  const totalPages = Math.ceil(urls.length / 5);
  const startIndex = (pagination.click - 1) * 5;
  const endIndex = pagination.click * 5;

  const tableHeaderKey = URL_TABLE_HEADER.map((header) => header.value);
  const itemKey = tableHeaderKey[0];

  const handleClickPagination = (num: number) => {
    setPagination((prevPagination) => ({
      ...prevPagination,
      click: num,
    }));
  };

  const handleCheckboxChange = (siteUrl: string) => {
    console.log(siteUrl);

    const newSelection = [...selectedUrls];
    if (newSelection.includes(siteUrl)) {
      newSelection.splice(newSelection.indexOf(siteUrl), 1);
      setSelectedImages((prev) => prev.filter((item) => item.site_url !== siteUrl));
    } else {
      newSelection.push(siteUrl);
      const newSelectedImages = previewImages.filter((item) => item.site_url === siteUrl);
      if (newSelectedImages) {
        setSelectedImages((prev) => [...prev, ...newSelectedImages]);
      }
    }
    setSelectedUrls(newSelection);
  };

  const handleCheckAll = () => {
    if (selectedUrls.length === urls.length) {
      setSelectedUrls([]);
      setSelectedImages([]);
    } else {
      setSelectedUrls(urls);
      setSelectedImages(previewImages);
    }
  };

  const handleClickDelete = (selectedUrl: string) => {
    if (selectedUrl === 'all_url') {
      setShowModalDelete(true);
    } else {
      const updatedUrls = urls.filter((url) => url !== selectedUrl);
      setUrls(updatedUrls);
    }
  };

  return (
    <>
      <table className="border-1 border-#B0BAC9 text-grey/7">
        <thead className="bg-grey/0 h-64 border-b-1">
          <tr>
            <th className="w-124">
              <Checkbox
                checked={selectedUrls.length > 0 && selectedUrls.length === urls.length}
                value="all_url"
                handleCheck={handleCheckAll}
              />
            </th>
            {URL_TABLE_HEADER.map((header, index) => (
              <th key={index} className={`${header.image ? 'w-124' : 'px-12'}`}>
                {header.text}{' '}
                {header.image && selectedUrls.length > 0 && selectedUrls.length === urls.length && (
                  <div onClick={() => handleClickDelete('all_url')} className="flex justify-center items-center">
                    <Image src={header.image} width={24} height={24} alt="url 삭제 이미지" />
                  </div>
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {urls.slice(startIndex, endIndex).map((url, index) => (
            <tr key={index} className={`h-48 border-b-1 ${selectedUrls.includes(url) ? 'bg-[#F2F6FE]' : ''}`}>
              <td>
                <Checkbox
                  checked={selectedUrls.includes(url)}
                  value={url}
                  handleCheck={() => handleCheckboxChange(url)}
                />
              </td>
              <td className="p-12">{url}</td>
              <td>
                <div onClick={() => handleClickDelete(url)} className="flex justify-center items-center">
                  <Image src="/images/mingcute_close-fill.svg" width={24} height={24} alt="url 삭제 이미지" />
                </div>
              </td>
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
      {showModalDelete && (
        <ModalChoose
          title="전체 삭제"
          description="입력한 모든 URL를 삭제합니다."
          leftButtonText="취소"
          rightButtonText="확인"
          onClose={() => setShowModalDelete(false)}
          onClick={() => setUrls([])}
        />
      )}
    </>
  );
}
