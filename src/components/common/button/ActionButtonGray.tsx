import { ActionButtonType } from '@/types/common';
import React from 'react';

const ActionButtonGray = (props: ActionButtonType) => {
  const { text, size } = props;

  return (
    <button
      className={`${size} text-[#4D5256] bg-[#F8FAFB] border-[#CED3D6] border-[1px] rounded-[0.25rem] `}
    >
      {text}
    </button>
  );
};

export default ActionButtonGray;
