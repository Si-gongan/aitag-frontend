import TextInputField from '@/components/common/input/TextInputField';
import { useState } from 'react';
import UrlListTable from './UrlListTable';
import { TABLE_BODY_NUMBER } from '@/utils/constants';
import ActionButtonSkyBlue from '@/components/common/button/ActionButtonSkyBlue';

export default function TabUrlSection() {
  const [urls, setUrls] = useState<string[]>([]);
  const [listNumber, setListNumber] = useState<number>(TABLE_BODY_NUMBER.URL_LIST);

  const overListNumber = urls.length >= listNumber;

  const handleSubmitUrl = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const inputUrl = (event.target as HTMLFormElement).url.value;
    setUrls((prev) => [...prev, inputUrl]);
    (event.target as HTMLFormElement).url.value = '';
  };

  const handleClickMore = () => {
    setListNumber(listNumber + 5);
  };

  return (
    <div className="flex flex-col mt-40 items-center w-980 gap-100 mb-136">
      <section className="flex flex-col gap-20 w-full">
        <form onSubmit={handleSubmitUrl}>
          <TextInputField name="url" placeholder="웹 URL 주소를 입력해주세요" buttonText="확인" />
        </form>
      </section>
      <section className="flex flex-col gap-20 w-full">
        <div className="flex flex-col gap-10">
          <h2 className="text-18 font-bold text-grey/7">URL 리스트</h2>
          <p className="font-bole text-grey/6">대체텍스트 생성이 진행될 URL 리스트입니다.</p>
        </div>
        <UrlListTable urls={urls} setUrls={setUrls} listNumber={listNumber} />
        {overListNumber && <ActionButtonSkyBlue text="더보기" size="h-54 w-full" onClick={handleClickMore} />}
      </section>
    </div>
  );
}
