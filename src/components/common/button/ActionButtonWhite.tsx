import { ActionButtonSkyBlueType } from '@/types/common';
import React from 'react';

const ActionButtonWhite = ({ text, size, onClick }: ActionButtonSkyBlueType) => {
  return (
    <button
      className={`flex items-center justify-center ${size} text-#454D59 bg-white rounded-[0.25rem] border-1 border-#DFE2E9`}
      onClick={onClick}>
      {text}
    </button>
  );
};

export default ActionButtonWhite;
