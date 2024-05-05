import Image from 'next/image';

export default function SearchInput() {
  return (
    <label
      htmlFor="search"
      className="flex items-center justify-between w-360 h-54 pl-24 pr-12 py-12 bg-white text-grey/7 placeholder-text-grey/5 rounded-4 border-1 border-grey/4">
      <input type="text" id="search" name="search" placeholder="검색어를 입력해주세요." />
      <button type="submit">
        <Image src="/images/search-icon.svg" alt="돋보기 모양의 검색 아이콘 버튼" width={30} height={30} />
      </button>
    </label>
  );
}
