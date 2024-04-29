import { ActionButtonType } from '@/types/common';
import React from 'react';

const ActionButton = (props: ActionButtonType) => {
  const { text, size } = props;

  return (
    <button className={`flex items-center justify-center ${size} text-[#fff] bg-brand/mainblue-0 rounded-[0.25rem] `}>
      {text}
    </button>
  );
};

export default ActionButton;
