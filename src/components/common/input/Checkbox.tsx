// import Image from 'next/image';
// import { MouseEvent, useState } from 'react';

// interface CheckboxProps {
//   onClick?: (event: MouseEvent<HTMLDivElement>) => void;
// }

// export default function Checkbox({ onClick }: CheckboxProps) {
//   const [isChecked, setIsChecked] = useState(false);

//   const handleClick = (event: MouseEvent<HTMLDivElement>) => {
//     setIsChecked((prev) => !prev);
//     if (onClick) {
//       onClick(event); // 부모 컴포넌트로 클릭 이벤트를 전달
//     }
//   };

//   return (
//     <div className="flex items-center cursor-pointer" onClick={handleClick}>
//       <Image
//         src={isChecked ? '/images/checkbox_checked.svg' : '/images/checkbox.svg'}
//         alt="체크박스 아이콘"
//         width={24}
//         height={24}
//       />
//     </div>
//   );
// }

//

// import Image from 'next/image';
// import { MouseEvent, useState } from 'react';

// interface CheckboxProps {
//   onClick?: (event: MouseEvent<HTMLDivElement>) => void;
//   checked?: boolean;
// }

// export default function Checkbox({ checked, onClick }: CheckboxProps) {
//   const [isChecked, setIsChecked] = useState(checked ?? false);

//   const handleClick = (event: MouseEvent<HTMLDivElement>) => {
//     setIsChecked((prev) => !prev);
//     if (onClick) {
//       onClick(event); // 부모 컴포넌트로 클릭 이벤트를 전달
//     }
//   };

//   return (
//     <div className="flex items-center cursor-pointer" onClick={handleClick}>
//       <Image
//         src={isChecked ? '/images/checkbox_checked.svg' : '/images/checkbox.svg'}
//         alt="체크박스 아이콘"
//         width={24}
//         height={24}
//       />
//     </div>
//   );
// }

//

import Image from 'next/image';
import { ChangeEvent, useEffect, useState } from 'react';

interface CheckboxProps {
  value: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  checked?: boolean;
}

export default function Checkbox({ value, checked, onChange }: CheckboxProps) {
  const [isChecked, setIsChecked] = useState(false);

  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
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
    <label htmlFor={value} className="flex items-center cursor-pointer">
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
        width={24}
        height={24}
      />
    </label>
  );
}
