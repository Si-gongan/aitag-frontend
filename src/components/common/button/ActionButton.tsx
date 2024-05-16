import { ActionButtonType } from '@/types/common';
import React from 'react';

const ActionButton = (props: ActionButtonType) => {
  const { text, size, onClick } = props;

  return (
    <button
      className={`flex items-center justify-center ${size} text-[#fff] bg-[#4C80F1] rounded-[0.25rem] `}
      onClick={onClick}>
      {text}
    </button>
  );
};

export default ActionButton;
