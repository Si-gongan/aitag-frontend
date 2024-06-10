import { AddKeywordsButtonType } from '@/types/common';
import React, { useState } from 'react';
import ModalAddKeywords from '../modal/ModalAddKeywords';

const AddKeywordsButton = ({ previewImages, setPreviewImages, item, onClick }: AddKeywordsButtonType) => {
  const [modalAddKeywords, setModalAddKeywords] = useState(false);

  const keyowrdsIs = item.keywords.length > 0;

  return (
    <div className="relative w-77 h-24">
      <button
        className={`flex items-center justify-center w-full h-full ${
          keyowrdsIs ? 'bg-primary-500 text-white' : 'bg-white text-#454D59 border-1'
        } rounded-[0.25rem] border-#DFE2E9`}
        onClick={() => setModalAddKeywords(true)}>
        {keyowrdsIs ? '수정하기' : '추가하기'}
      </button>
      {modalAddKeywords && (
        <div className="absolute top-0 right-88 z-modal">
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
