'use client';

import PagenationButton from '@/components/common/button/PaginationButton';
import NoticeTable from '@/components/main/support/NoticeTable';
import { GetSupportFaqResponseType } from '@/types/common';
import { fetchWithInterceptor } from '@/utils/fetchWithInterceptor';
import { API_ROUTE } from '@/utils/routes';
import { useEffect, useState } from 'react';

export default function NoticePage() {
  const [loading, setLoading] = useState<boolean>(false);
  const [noticeData, setNoticeData] = useState<GetSupportFaqResponseType>();

  const { notices, totalPages } = noticeData || { notices: [], totalPages: 0, hasNextPage: false };

  const [pagination, setPagination] = useState({ start: 1, click: 1 });

  const handleClickPagination = (num: number) => {
    setPagination((prevPagination) => ({
      ...prevPagination,
      click: num,
    }));
  };

  const getNoticeList = async () => {
    const options = { method: 'GET' };
    const PARAMS = {
      limit: '5',
      page: String(pagination.click),
    };

    try {
      setLoading(true);

      const response = await fetchWithInterceptor(API_ROUTE.GET_SUPPORT_NOTICE(PARAMS), options);
      const result = await response.json();
      const data = result.result;

      setNoticeData(data);
    } catch (error) {
      console.error('고객센터 공지사항 데이터를 가져오는 데 실패했습니다.', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getNoticeList();

    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col gap-48">
      <NoticeTable notices={notices} />
      <PagenationButton
        pagination={pagination}
        setPagination={setPagination}
        totalPages={totalPages}
        onClick={handleClickPagination}
      />
    </div>
  );
}
