import ActionButtonGray from '@/components/common/button/ActionButtonGray';
import { getResultDetailTitle } from '@/utils/getResultDetailTitle';
import { useRouter } from 'next/navigation';
import SortDropdown from './SortDropdown';
import { DashbaordSortType, WorkType } from '@/types/common';
import DownloadDropdown from './DownloadDropdown';
import { PATH } from '@/utils/routes';

interface PostIdTitleProps {
  target: string;
  isComplete: boolean;
  requestExpertPage?: boolean;
  setRequestExpertPage?: React.Dispatch<React.SetStateAction<boolean>>;
  selectedTotal?: number;
  tableSort?: DashbaordSortType;
  setTableSort?: React.Dispatch<React.SetStateAction<DashbaordSortType>>;
  selectedWorks?: WorkType[];
}

export default function PostIdTitle({
  target = 'inspect',
  isComplete,
  requestExpertPage = false,
  setRequestExpertPage,
  selectedTotal,
  tableSort,
  setTableSort,
  selectedWorks,
}: PostIdTitleProps) {
  const router = useRouter();

  const titleDescription = getResultDetailTitle(target, isComplete, requestExpertPage);

  const goBack = () => {
    router.push(PATH.DASHBOARD);
  };

  const handleClickSort = (selectedSort: DashbaordSortType) => {
    setTableSort && setTableSort(selectedSort);
  };

  return (
    <section className="flex flex-col px-40 gap-23">
      <div className="flex flex-col gap-10 text-grey/7 font-bold">
        <h1 className="text-36">{titleDescription && titleDescription.title}</h1>
        {titleDescription && titleDescription.description}
        <br />
        {titleDescription && titleDescription.addDescription}
      </div>
      <hr className="border-1 border-grey/3" />
      <div className="flex justify-between items-center">
        <ActionButtonGray text="뒤로가기" size="w-144 h-54" type="back" onClick={goBack} />
        {isComplete && selectedWorks && !requestExpertPage && (
          <div className="flex gap-8">
            <DownloadDropdown selectedWorks={selectedWorks} disabled={selectedTotal === 0} />
            {target === 'ai' && (
              <ActionButtonGray
                text="검수 요청"
                size="w-144 h-54"
                type="back"
                onClick={() => setRequestExpertPage && setRequestExpertPage(true)}
                disabled={selectedTotal === 0}
              />
            )}
            {target === 'inspect' && (
              <SortDropdown type="inspect" sort={tableSort as DashbaordSortType} onClick={handleClickSort} />
            )}
          </div>
        )}
      </div>
    </section>
  );
}
