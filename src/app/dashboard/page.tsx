'use client';

import SearchInput from '@/components/common/input/SearchInput';
import ListSection from '@/components/main/dashboard/ListSection';
import SortDropdown from '@/components/main/dashboard/SortDropdown';
import { DashbaordSortType, GetPostResponseType } from '@/types/common';
import { DASHBOARD_LIMIT } from '@/utils/constants';
import { fetchWithInterceptor } from '@/utils/fetchWithInterceptor';
import { API_ROUTE } from '@/utils/routes';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Dashbaord() {
  const [sort, setSort] = useState<DashbaordSortType>({ id: 'ai', name: 'AI 생성' });
  const [searchValue, setSearchValue] = useState<string>('');
  const [resultData, setResultData] = useState<GetPostResponseType>();
  const [pagination, setPagination] = useState({ start: 1, click: 1, total: 1 });
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const { hasPrevPage, hasNextPage, totalPages, posts } = resultData
    ? resultData
    : { hasPrevPage: false, hasNextPage: false, totalPages: 0, posts: [] };

  const items = (resultData && (resultData.hasOwnProperty('posts') ? resultData.posts : resultData?.inspects)) || [];

  const handleSubmitSearch = (event: React.MouseEvent<HTMLFormElement>) => {
    event.preventDefault();
    getResultItem();
  };

  const handleClickSort = (selectedSort: DashbaordSortType) => {
    setSort(selectedSort);
  };

  const getResultItem = async () => {
    setLoading(true);

    const options = { method: 'GET' };
    const DEFAULT_PARAMS = {
      search: searchValue,
      limit: DASHBOARD_LIMIT,
      page: String(pagination.click),
    };

    try {
      if (sort.id === 'inspect') {
        const response = await fetchWithInterceptor(API_ROUTE.GET_INSPECT(DEFAULT_PARAMS), options);
        const result = await response.json();
        setResultData(result.result);
      } else {
        const PARAMS = { ...DEFAULT_PARAMS, target: sort.id };
        const response = await fetchWithInterceptor(API_ROUTE.GET_POST(PARAMS), options);
        const result = await response.json();
        setResultData(result.result);
      }
    } catch (error) {
      console.error('대시보드 결과를 가져오는데 실패했습니다.', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.replace('/login'); // 뒤로 돌아가기 불가능
    }
    
    getResultItem();
  }, []);

  useEffect(() => {
    getResultItem();
    setPagination((prev) => ({ ...prev, start: 1, click: 1 }));
  }, [sort]);

  useEffect(() => {
    getResultItem();
  }, [pagination.click]);

  useEffect(() => {
    setPagination((prev) => ({ ...prev, total: totalPages }));
  }, [totalPages]);

  return (
    <div className="flex flex-col w-1075 pt-80 pb-64 px-16 gap-48">
      <section className="flex justify-between items-center">
        <div className="flex flex-col gap-10">
          <h1 className="text-36 font-bold text-grey/7">대시보드</h1>
          <p className="text-grey/7">AI와 전문 해설진의 대체텍스트 생성결과를 확인하세요.</p>
        </div>
        <form onSubmit={handleSubmitSearch} className="flex gap-8">
          <SearchInput value={searchValue} setValue={setSearchValue} />
          <SortDropdown sort={sort} onClick={handleClickSort} />
        </form>
      </section>
      {items && items.length === 0 ? (
        <section className="flex w-full h-full min-h-600 items-center justify-center text-grey/5">
          대체텍스트 생성결과가 없습니다.
        </section>
      ) : (
        <ListSection items={items} sortId={sort.id} pagination={pagination} setPagination={setPagination} />
      )}
    </div>
  );
}