import { SetStateAction } from 'react';
import { DASHBOARD_SORT } from './constants';
import { DashbaordSortType, PaginationType } from '@/types/common';

interface initUrlParamsProps {
  params: URLSearchParams;
  setSort: React.Dispatch<SetStateAction<DashbaordSortType>>;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  setPagination: React.Dispatch<React.SetStateAction<PaginationType>>;
}

export const initUrlParams = ({ params, setSort, setSearchValue, setPagination }: initUrlParamsProps) => {
  const sortParam = params.get('sort');
  const searchParam = params.get('search');
  const pageParam = params.get('page');

  if (sortParam) {
    const foundSort = DASHBOARD_SORT.find((option) => option.id === sortParam);
    if (foundSort) {
      setSort(foundSort);
    }
  } else {
    setSort({ id: 'ai', name: 'AI 생성' });
  }

  if (searchParam) {
    setSearchValue(searchParam);
  } else {
    setSearchValue('');
  }

  if (pageParam) {
    setPagination((prev) => ({
      ...prev,
      click: parseInt(pageParam),
    }));
  } else {
    setPagination((prev) => ({ ...prev, start: 1, click: 1 }));
  }
};
