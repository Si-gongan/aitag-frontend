import { ActionButtonType } from '@/types/common';
import React from 'react';

const ActionButtonImage = (props: ActionButtonType) => {
  const { text, size, onClick, disabled } = props;

  return (
    <button
      className={`${size} ${
        disabled ? 'bg-[#F2F6FE] border-[#4C80F1] border-[1px] rounded-[0.25rem] text-[#2C5AE9]' : 'bg-[#F8FAFB] border-[#CED3D6] border-[1px] rounded-[0.25rem] text-[#4D5256]'
      } `}
      onClick={onClick}
      disabled={disabled}
      style = {!disabled ? { boxShadow: '0px 1px 1px 0px #00000007' } : { boxShadow: '0px 1px 1px 0px #4C80F152' }}>
      {text}
    </button>
  );
};

export default ActionButtonImage;