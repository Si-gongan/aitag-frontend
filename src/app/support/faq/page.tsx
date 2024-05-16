'use client';

import FaqTab from '@/components/main/support/FaqTab';
import FaqTable from '@/components/main/support/FaqTable';
import { GetSupportFaqResponseType, SupportTabType } from '@/types/common';
import { fetchWithInterceptor } from '@/utils/fetchWithInterceptor';
import { API_ROUTE } from '@/utils/routes';
import { useEffect, useState } from 'react';

export default function faqPage() {
  const [tab, setTab] = useState<SupportTabType>({ id: 'all', text: '전체' });
  const [faqList, setFaqList] = useState<GetSupportFaqResponseType>();
  const [loading, setLoading] = useState<boolean>(false);

  const { faqs, totalPages, hasNextPage } = faqList || { faqs: [], totalPages: 0, hasNextPage: false };

  const [pagination, setPagination] = useState({ start: 1, click: 1, total: totalPages });

  const getFaqList = async () => {
    const options = { method: 'GET' };
    const PARAMS = {
      type: tab.id,
      limit: '5',
      page: String(pagination.click),
    };

    try {
      setLoading(true);

      const response = await fetchWithInterceptor(API_ROUTE.GET_SUPPORT_FAQ(PARAMS), options);
      const result = await response.json();
      const data = result.result;

      setFaqList(data);
    } catch (error) {
      console.error('고객센터 FAQ 데이터를 가져오는데 실패했습니다.', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getFaqList();
  }, [tab]);

  return (
    <section className="flex flex-col items-center w-980 pt-40 gap-100 mb-125">
      <div className="flex flex-col items-center gap-16">
        <span className="text-18 text-[#B2B0B3] tracking-[1.8px]">FAQ</span>
        <h1 className="text-36 text-grey/7 font-bold tracking-[3.6px]">FAQ</h1>
      </div>
      <FaqTab tab={tab} setTab={setTab} />
      <FaqTable faqs={faqs || []} pagination={pagination} setPagination={setPagination} />
      {/* <FaqTable pagination={{ start: 1, click: 1, total: 2 }} setPagination={setPagination} /> */}
    </section>
  );
}
