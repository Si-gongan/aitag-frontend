import { ActionButtonType } from '@/types/common';
import React from 'react';

const ActionButtonSkyBlue = (props: ActionButtonType) => {
  const { text, size } = props;

  return (
    <button
      className={`flex items-center justify-center ${size} text-brand/mainblue-d1 bg-[#F2F6FE] rounded-[0.25rem] border-1 border-brand/mainblue-d1`}>
      {text}
    </button>
  );
};

export default ActionButtonSkyBlue;
