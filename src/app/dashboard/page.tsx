'use client';

import SearchInput from '@/components/common/input/SearchInput';
import ListSection from '@/components/main/dashboard/ListSection';
import SortDropdown from '@/components/main/dashboard/SortDropdown';
import { DashbaordSortType, GetPostResponseType } from '@/types/common';
import { DASHBOARD_LIMIT } from '@/utils/constants';
import { fetchWithInterceptor } from '@/utils/fetchWithInterceptor';
import { initUrlParams } from '@/utils/initUrlParams';
import { API_ROUTE, PATH } from '@/utils/routes';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useContext, useEffect, useState } from 'react';
import { DashboardContext } from './layout';

export default function Dashbaord() {
  const [resultData, setResultData] = useState<GetPostResponseType>();
  const [loading, setLoading] = useState<boolean>(false);

  let { sort, setSort, pagination, setPagination, searchValue, setSearchValue } = useContext(DashboardContext);

  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);

  const items = (resultData && (resultData.hasOwnProperty('posts') ? resultData.posts : resultData?.inspects)) || [];

  const handleSubmitSearch = (event: React.MouseEvent<HTMLFormElement>) => {
    event.preventDefault();

    const params = new URLSearchParams(searchParams);
    if (searchValue) {
      params.set('sort', sort.id);
      params.set('search', searchValue);
      params.delete('page');

      replace(`${PATH.DASHBOARD}?${params.toString()}`);
    } else {
      params.delete('search');
      replace(`${PATH.DASHBOARD}?${params.toString()}`);
    }
    getResultItem();
  };

  const handleClickSort = (selectedSort: DashbaordSortType) => {
    params.set('sort', selectedSort.id);
    params.delete('page');
    params.delete('search');

    setSort(selectedSort);
    setPagination((prev) => ({ ...prev, click: 1 }));
    setSearchValue('');
    replace(`${PATH.DASHBOARD}?${params.toString()}`);
  };

  const getResultItem = async () => {
    const options = { method: 'GET' };
    const DEFAULT_PARAMS = {
      search: searchValue,
      limit: DASHBOARD_LIMIT,
      page: String(pagination.click),
    };

    try {
      setLoading(true);

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
    initUrlParams({ params, setSort, setSearchValue, setPagination });
    getResultItem();
  }, []);

  useEffect(() => {
    getResultItem();
  }, [sort, pagination.click]);

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
        <ListSection items={items} totalPages={resultData?.totalPages || 1} />
      )}
    </div>
  );
}
