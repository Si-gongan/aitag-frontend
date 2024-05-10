import { ActionButtonType } from '@/types/common';
import React from 'react';

const ActionButtonGray = (props: ActionButtonType) => {
  const { text, size, onClick, disabled } = props;

  return (
    <button
      className={`${size} bg-[#F8FAFB] border-[#CED3D6] border-[1px] rounded-[0.25rem] ${
        disabled ? 'text-grey/5' : 'text-[#4D5256]'
      } `}
      onClick={onClick}
      disabled={disabled}>
      {text}
    </button>
  );
};

export default ActionButtonGray;
