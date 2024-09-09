'use client';

import PostIdTable from '@/components/main/dashboard/PostIdTable';
import PostIdTitle from '@/components/main/dashboard/PostIdTitle';
import { DashbaordSortType, PostType, WorkType } from '@/types/common';
import { fetchWithInterceptor } from '@/utils/fetchWithInterceptor';
import { API_ROUTE } from '@/utils/routes';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function PostIdINSPECT() {
  const [loading, setLoading] = useState<boolean>(false);
  const [post, setPost] = useState<PostType>();
  const [selectedWorks, setSelectedWorks] = useState<WorkType[]>([]);
  const [tableSort, setTableSort] = useState<DashbaordSortType>({ id: 'inspect', name: '해설진 검수' });

  const router = useRouter();
  const pathname = usePathname();
  const parts = pathname.split('/');
  const ispectId = parts[2];
  const pageSort = parts[parts.length - 1];

  const { isComplete, works, detail } = post ? post : { isComplete: false, works: [], detail: '' };
  const selectedTotal = selectedWorks.length;

  const getPosts = async () => {
    setLoading(true);

    const options = { method: 'GET' };

    try {
      const response = await fetchWithInterceptor(API_ROUTE.GET_INSPECT_DETAIL(ispectId), options);
      const result = await response.json();

      setPost(result.result.inspect);
    } catch (error) {
      console.error('생성 결과를 가져오는데 실패했습니다.', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="flex flex-col w-1092 min-h-800 pt-40 pb-40 gap-60 bg-white">
      <PostIdTitle 
        target="inspect" 
        isComplete={isComplete} 
        tableSort={tableSort} 
        setTableSort={setTableSort}
        selectedTotal={selectedTotal}
        selectedWorks={selectedWorks} />
      <div className="flex flex-col gap-23">
        <PostIdTable
          works={works}
          selectable={isComplete}
          selectedWorks={selectedWorks}
          setSelectedWorks={setSelectedWorks}
          showTableNum={isComplete ? 10 : 5}
          headerTitle={isComplete ? '대체텍스트' : 'AI 생성 대체텍스트'}
          tableSortId={tableSort.id}
        />
        {!isComplete && (
          <div className="flex flex-col gap-6 px-40 text-grey/6">
            <h3>검수 요청 내용</h3>
            <textarea
              value={detail}
              className="w-full h-146 px-24 py-17 border-1 border-grey/4 rounded-4 text-grey/6 resize-none focus:outline-none"
              readOnly
            />
          </div>
        )}
      </div>
    </div>
  );
}
