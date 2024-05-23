import PageLoading from '@/components/common/animation/PageLoading';
import DashboardContent from '@/components/main/dashboard/DashboardContent';
import { Suspense } from 'react';

export default function Dashboard() {
  return (
    <Suspense fallback={<PageLoading />}>
      <DashboardContent />
    </Suspense>
  );
}
