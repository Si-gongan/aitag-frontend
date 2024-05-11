'use client';

import { GetSupportFaqResponseType } from '@/types/common';
import { fetchWithInterceptor } from '@/utils/fetchWithInterceptor';
import { API_ROUTE } from '@/utils/routes';
import { useEffect, useState } from 'react';

export default function NoticePage() {
  const [loading, setLoading] = useState<boolean>(false);
  const [noticeList, setNoticeList] = useState<GetSupportFaqResponseType>();

  const { notices, totalPages, hasNextPage } = noticeList || { notices: [], totalPages: 0, hasNextPage: false };

  const [pagination, setPagination] = useState({ start: 1, click: 1, total: totalPages });

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

      setNoticeList(data);
    } catch (error) {
      console.error('고객센터 공지사항 데이터를 가져오는 데 실패했습니다.', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getNoticeList();
  }, []);

  return (
    <section className="flex flex-col items-center w-980 pt-40 gap-100 mb-125">
      <div className="flex flex-col items-center gap-16">
        <span className="text-18 text-[#B2B0B3]">NOTICE</span>
        <h1 className="text-36 text-grey/7 font-bold">공지사항</h1>
      </div>
    </section>
  );
}
