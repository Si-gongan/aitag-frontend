'use client';

import SearchInput from '@/components/common/input/SearchInput';
import SortDropdown from '@/components/main/dashboard/SortDropdown';
import { DashbaordSortType } from '@/types/common';
import { useState } from 'react';

export default function Dashbaord() {
  const [sort, setSort] = useState<DashbaordSortType>({ id: 'ai', name: 'AI 생성' });

  const handleSubmitSearch = () => {
    console.log('제출');
  };

  const handleClickSort = (selectedSort: DashbaordSortType) => {
    setSort(selectedSort);
  };

  return (
    <div className="flex flex-col w-1075 pt-80 pb-64 px-16">
      <section className="flex justify-between items-center">
        <div className="flex flex-col gap-10">
          <h1 className="text-36 font-bold text-grey/7">대시보드</h1>
          <p className="text-grey/7">AI와 전문 해설진의 대체텍스트 생성결과를 확인하세요.</p>
        </div>
        <form onSubmit={handleSubmitSearch} className="flex gap-8">
          <SearchInput />
          <SortDropdown sort={sort} onClick={handleClickSort} />
        </form>
      </section>
    </div>
  );
}
