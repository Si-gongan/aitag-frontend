'use client';

import { DashbaordSortType, PaginationType } from '@/types/common';
import { createContext, useState } from 'react';

interface DashboardContextType {
  sort: DashbaordSortType;
  setSort: React.Dispatch<React.SetStateAction<DashbaordSortType>>;
  pagination: PaginationType;
  setPagination: React.Dispatch<React.SetStateAction<{ start: number; click: number }>>;
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}

export const DashboardContext = createContext<DashboardContextType>({
  sort: { id: 'ai', name: 'AI 생성' },
  setSort: () => {},
  pagination: { start: 1, click: 1 },
  setPagination: () => {},
  searchValue: '',
  setSearchValue: () => {},
});

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [sort, setSort] = useState<DashbaordSortType>({ id: 'ai', name: 'AI 생성' });
  const [searchValue, setSearchValue] = useState<string>('');
  const [pagination, setPagination] = useState({ start: 1, click: 1 });

  return (
    <DashboardContext.Provider value={{ sort, setSort, pagination, setPagination, searchValue, setSearchValue }}>
      <main className="flex flex-col items-center bg-[#FAFBFC]">{children}</main>
    </DashboardContext.Provider>
  );
}
