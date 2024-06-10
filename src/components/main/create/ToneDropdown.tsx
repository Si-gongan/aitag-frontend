import { PreviewImageItemType } from '@/types/common';
import { TONE } from '@/utils/constants';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

interface ToneDropdownProps {
  item: PreviewImageItemType;
  previewImages: PreviewImageItemType[];
  setPreviewImages: React.Dispatch<React.SetStateAction<PreviewImageItemType[]>>;
}

export default function ToneDropdown({ item, previewImages, setPreviewImages }: ToneDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedTone = TONE.find((tone) => tone.value === item.tone);

  const handleClickTone = (toneValue: string) => {
    const updatedPreviewImages = previewImages.map((image) => (image === item ? { ...image, tone: toneValue } : image));

    setPreviewImages(updatedPreviewImages);
  };

  const toggleDropdown = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    event.preventDefault();
    setIsOpen((prev) => !prev);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} onClick={toggleDropdown}>
      <div
        className={`relative flex items-center justify-center gap-4 w-176 h-48 text-14 text-grey/7 cursor-pointer ${isOpen ? 'bg-grey/1' : ''}`}>
        {selectedTone?.text}
        <span className={`relative shrink-0 w-24 h-24 ${isOpen ? 'rotate-180' : ''}`}>
          <Image src="/images/arrow-line-s.svg" alt="문체를 선택할 수 있는 드롭다운 버튼" fill />
        </span>
        {isOpen && (
          <div className="absolute top-48 flex flex-col bg-white w-176 rounded-4 drop-shadow z-dropdown">
            {TONE.map((tone) => (
              <span
                key={tone.value}
                onClick={() => handleClickTone(tone.value)}
                className="flex items-center justify-center w-full h-48 hover:bg-grey/2">
                {tone.text}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
