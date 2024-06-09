import Image from 'next/image';
import { ChangeEvent, useEffect, useState } from 'react';

interface CheckboxProps {
  value: string; // 'all' 또는 특정값
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  checked?: boolean;
  disabled?: boolean;
  size?: number;
}

export default function Checkbox({ value, checked, onChange, disabled, size = 24 }: CheckboxProps) {
  const [isChecked, setIsChecked] = useState(false);

  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;

    const newValue = !isChecked;
    setIsChecked(newValue);

    if (onChange) {
      onChange(event); // 부모 컴포넌트로 클릭 이벤트를 전달
    }
  };

  useEffect(() => {
    if (checked !== undefined) {
      setIsChecked(checked);
    }
  }, [checked]);

  return (
    <label htmlFor={value} className="flex items-center cursor-pointer justify-center">
      <input
        id={value}
        type="checkbox"
        value={value}
        className="hidden"
        checked={isChecked}
        onChange={handleChangeInput}
      />
      <Image
        src={isChecked ? '/images/checkbox_checked.svg' : '/images/checkbox.svg'}
        alt="체크박스 아이콘"
        width={size}
        height={size}
      />
    </label>
  );
}
