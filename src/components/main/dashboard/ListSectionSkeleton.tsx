import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function ListSectionSkeletone() {
  const itemsSkeletone = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <section className="flex flex-col gap-40">
      <div className="flex w-full flex-wrap gap-32 min-h-642">
        {itemsSkeletone.map((item) => {
          return (
            <div key={item} className="flex flex-col w-183 rounded-10 overflow-hidden">
              <Skeleton className="w-183 h-183 overflow-hidden object-cover" />
              <div className="flex flex-col justify-between h-120 pt-18 pb-17 px-10">
                <div className="flex flex-col gap-8 text-12">
                  <Skeleton width={70} />
                  <Skeleton width={130} />
                </div>
                <Skeleton width={50} />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
