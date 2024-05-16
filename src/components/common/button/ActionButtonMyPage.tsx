import { ActionButtonMyPageType } from '@/types/common';
import React from 'react';
import { useRouter,usePathname } from 'next/navigation';

const ActionButtonMyPage = (props: ActionButtonMyPageType) => {
  const { text, size, onClick, disabled } = props;
  const router = useRouter();
  const pathname = usePathname();

  const isActive = pathname === props.href;

  return (
    <button
      className={`${size} ${
        isActive ? 'bg-[#F2F6FE] border-[#4C80F1] border-[1px] rounded-[0.25rem] text-[#2C5AE9]' : 'bg-[#F8FAFB] border-[#CED3D6] border-[1px] rounded-[0.25rem] text-[#4D5256]'
      } `}
      onClick={onClick}
      disabled={disabled}
      style = {!isActive ? { boxShadow: '0px 1px 1px 0px #00000007' } : { boxShadow: '0px 1px 1px 0px #4C80F152' }}>
      {text}
    </button>
  );
};

export default ActionButtonMyPage;