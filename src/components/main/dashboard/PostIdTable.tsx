// import Checkbox from '@/components/common/input/Checkbox';
// import { PostIdTableItemType, WorkType } from '@/types/common';
// import Image from 'next/image';

// interface PostIdTableProps {
//   works: WorkType[];
//   selectable?: boolean;
//   selectedWorks?: WorkType[];
//   setSelectedWorks?: React.Dispatch<React.SetStateAction<WorkType[]>>;
//   showTableNum?: number;
//   headerTitle?: string;
// }

// export default function PostIdTable({
//   works,
//   selectable = false,
//   selectedWorks,
//   setSelectedWorks,
//   showTableNum = 5,
//   headerTitle = '대체 텍스트',
// }: PostIdTableProps) {
//   const tbodyHeight = `max-h-${showTableNum * 53}`;

//   const headers = [
//     { text: '이미지', value: 'image' },
//     { text: headerTitle, value: 'answer' },
//   ];

//   const items: PostIdTableItemType[] = works.map((work) => {
//     const thumnail =
//       work.image.startsWith('https://gongbang') && work.answer !== 'ERROR!'
//         ? work.image
//         : '/images/dashboard-default-image.png';
//     return { image: thumnail, answer: work.answer };
//   });

//   const headerKey = headers.map((header) => header.value);
//   const isSelectedAll = () => {
//     if (selectedWorks) {
//       return selectedWorks.length === works.length;
//     }
//     return false;
//   };

//   const handleCheck = (checkedImage: string) => {
//     if (!setSelectedWorks) return;

//     if (checkedImage === 'all') {
//       if (isSelectedAll()) {
//         setSelectedWorks([]);
//       } else {
//         setSelectedWorks(works);
//       }
//       return;
//     }

//     const isChecked = selectedWorks?.some((work) => work.image === checkedImage);
//     if (!isChecked) {
//       const newSelectedWork = works.find((work) => work.image === checkedImage);
//       if (newSelectedWork) {
//         setSelectedWorks((prev) => [...prev, newSelectedWork]);
//       }
//     } else {
//       const newSelectedWorks = selectedWorks ? selectedWorks.filter((work) => work.image !== checkedImage) : [];
//       setSelectedWorks(newSelectedWorks);
//     }
//   };

//   return (
//     <table className="border-1 border-#B0BAC9">
//       <thead className="table w-full bg-grey/0 border-b-1 h-53 text-grey/7">
//         <tr className="table w-full">
//           {selectable && (
//             <th className="w-104 h-53">
//               <Checkbox value="all" checked={isSelectedAll()} onChange={() => handleCheck('all')} />
//             </th>
//           )}
//           {headers.map((header) => (
//             <th
//               key={header.value}
//               className={`h-53 ${header.value === 'image' ? (selectable ? 'w-120' : 'w-160') : ''}`}>
//               {header.text}
//             </th>
//           ))}
//         </tr>
//       </thead>
//       <tbody className={`block ${tbodyHeight} overflow-y-auto`}>
//         {items.map((item, index) => (
//           <tr
//             key={index}
//             className={`table h-53 border-b-1 text-grey/6 ${
//               selectedWorks?.some((work) => work.image === item.image) ? 'bg-[#F2F6FE]' : ''
//             }`}>
//             {selectable && (
//               <td className="w-104">
//                 <Checkbox
//                   value={item.image}
//                   checked={selectedWorks?.some((work) => work.image === item.image)}
//                   onChange={() => handleCheck(item.image)}
//                 />
//               </td>
//             )}
//             {headerKey.map((key) => (
//               <td key={key + index}>
//                 {key === 'image' ? (
//                   <div className={`flex items-center justify-center ${selectable ? 'w-120' : 'w-160'}`}>
//                     <div className="relative w-40 h-40">
//                       <Image src={item.image} alt={`이미지 미리보기 썸네일 ${index}`} fill />
//                     </div>
//                   </div>
//                 ) : (
//                   <p className="min-w-860 px-40 shrink">{item[key] ?? '없음'}</p>
//                 )}
//               </td>
//             ))}
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// }

//

import Checkbox from '@/components/common/input/Checkbox';
import { PostIdTableItemType, WorkType } from '@/types/common';
import Image from 'next/image';

interface PostIdTableProps {
  works: WorkType[];
  selectable?: boolean;
  selectedWorks?: WorkType[];
  setSelectedWorks?: React.Dispatch<React.SetStateAction<WorkType[]>>;
  showTableNum?: number;
  headerTitle?: string;
  tableSortId?: string;
}

export default function PostIdTable({
  works,
  selectable = false,
  selectedWorks,
  setSelectedWorks,
  showTableNum = 5,
  headerTitle = '대체 텍스트',
  tableSortId = 'default',
}: PostIdTableProps) {
  const tbodyHeight = `max-h-${showTableNum * 53}`;

  const headers = [
    { text: '이미지', value: 'image' },
    { text: headerTitle, value: 'answer' },
    { text: '아이디', value: 'id' },
  ];

  const items: PostIdTableItemType[] = works.map((work) => {
    const thumbnail = work.image.startsWith('data:image/') ? '/images/thumb_default.svg' : work.image;

    if (tableSortId === 'ai') {
      return { image: thumbnail, answer: work.before, id: work.id };
    } else if (tableSortId === 'inspect') {
      return { image: thumbnail, answer: work.after, id: work.id };
    } else {
      return { image: thumbnail, answer: work.answer, id: work.id };
    }
  });

  const headerKey = headers.map((header) => header.value);
  const isSelectedAll = () => {
    if (selectedWorks) {
      return selectedWorks.length === works.length;
    }
    return false;
  };

  const handleCheck = (checkedImage: string) => {
    if (!setSelectedWorks) return;

    if (checkedImage === 'all') {
      if (isSelectedAll()) {
        setSelectedWorks([]);
      } else {
        setSelectedWorks(works);
      }
      return;
    }

    const isChecked = selectedWorks?.some((work) => work.id === checkedImage);
    if (!isChecked) {
      const newSelectedWork = works.find((work) => work.id === checkedImage);
      if (newSelectedWork) {
        setSelectedWorks((prev) => [...prev, newSelectedWork]);
      }
    } else {
      const newSelectedWorks = selectedWorks ? selectedWorks.filter((work) => work.id !== checkedImage) : [];
      setSelectedWorks(newSelectedWorks);
    }
  };
  console.log(tbodyHeight);

  return (
    <table className="border-1 border-#B0BAC9">
      <thead className="table w-full bg-grey/0 border-b-1 h-53 text-grey/7">
        <tr className="table w-full">
          {selectable && (
            <th className="w-104 h-53">
              <Checkbox value="all" checked={isSelectedAll()} onChange={() => handleCheck('all')} />
            </th>
          )}
          {headers.map((header) => (
            <th
              key={header.value}
              className={`h-53 ${header.value === 'image' ? (selectable ? 'w-120' : 'w-160') : ''} ${
                header.value === 'id' && 'hidden'
              }`}>
              {header.text}
            </th>
          ))}
        </tr>
      </thead>
      {/* <tbody className={`block ${tbodyHeight} overflow-y-auto`}> */}
      <tbody className={`block ${tbodyHeight ? tbodyHeight : 'max-h-265'} overflow-y-auto`}>
        {items.map((item, index) => (
          <tr
            key={index}
            className={`table w-full h-53 border-b-1 text-grey/6 ${
              selectedWorks?.some((work) => work.id === item.id) ? 'bg-[#F2F6FE]' : ''
            }`}>
            {selectable && (
              <td className="w-104">
                <Checkbox
                  value={item.id as string}
                  checked={selectedWorks?.some((work) => work.id === item.id)}
                  onChange={() => handleCheck(item.id as string)}
                />
              </td>
            )}
            {headerKey.map((key) => (
              <td key={key + index}>
                {key === 'image' ? (
                  <div className={`flex items-center justify-center ${selectable ? 'w-120' : 'w-160'}`}>
                    <img src={item.image} alt={`이미지 미리보기 썸네일 ${index}`} className="w-40 h-40" />
                    {/* <div className="relative w-40 h-40">
                      <Image src={item.image as string} alt={`이미지 미리보기 썸네일 ${index}`} fill />
                    </div> */}
                  </div>
                ) : key === 'id' ? (
                  <div className="hidden" />
                ) : (
                  <p className="min-w-860 px-40 shrink">{item[key] ?? '없음'}</p>
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
