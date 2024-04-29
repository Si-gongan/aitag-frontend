import { ActionButtonType } from '@/types/common';
import React from 'react';

const ActionButtonBlack = (props: ActionButtonType) => {
  const { text, size } = props;

  return (
    <button className={`${size}  text-[#fff] bg-[#031024] rounded-[0.25rem] `}>
      {text}
    </button>
  );
};

export default ActionButtonBlack;
