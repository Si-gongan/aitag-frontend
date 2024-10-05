import Image from 'next/image';
import { ChangeEvent, useEffect, useState } from 'react';

// FIX: 전체적으로 리팩토링 필요
// FIX: 현재 체크박스 UI 이미지로 수정 중 -> CSS로 변경

interface CheckboxProps {
  value: string; // 'all' 또는 특정값
  handleCheck: (value: string) => void;
  checked?: boolean;
  disabled?: boolean;
  size?: number;
}

export default function Checkbox({ value, handleCheck, checked, disabled, size = 24 }: CheckboxProps) {
  return (
    <label htmlFor={value} className="flex items-center cursor-pointer justify-center">
      <input
        id={value}
        type="checkbox"
        value={value}
        className="hidden"
        checked={checked}
        onChange={() => handleCheck(value)}
      />
      <Image
        src={checked ? '/images/checkbox_checked.svg' : '/images/checkbox.svg'}
        alt="체크박스 아이콘"
        width={size}
        height={size}
      />
    </label>
  );
}
