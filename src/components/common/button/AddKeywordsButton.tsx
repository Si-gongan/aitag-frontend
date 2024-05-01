import { AddKeywordsButtonType } from '@/types/common';
import React, { useState } from 'react';
import ModalAddKeywords from '../modal/ModalAddKeywords';

const AddKeywordsButton = ({ previewImages, setPreviewImages, item, onClick }: AddKeywordsButtonType) => {
  const [modalAddKeywords, setModalAddKeywords] = useState(false);

  return (
    <div className="relative w-77 h-24">
      <button
        className="flex items-center justify-center w-full h-full text-#454D59 bg-white rounded-[0.25rem] border-1 border-#DFE2E9"
        onClick={() => setModalAddKeywords(true)}>
        추가하기
      </button>
      {modalAddKeywords && (
        <div className="absolute top-0 right-88">
          <ModalAddKeywords
            item={item}
            previewImages={previewImages}
            setPreviewImages={setPreviewImages}
            onClose={() => setModalAddKeywords(false)}
          />
        </div>
      )}
    </div>
  );
};

export default AddKeywordsButton;
