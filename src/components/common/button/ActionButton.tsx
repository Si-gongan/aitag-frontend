// import { ActionButtonType } from '@/types/common';
// import React from 'react';

// const ActionButton = (props: ActionButtonType) => {
//   const { text, size, onClick } = props;

//   return (
//     <button
//       className={`flex items-center justify-center ${size} text-[#fff] bg-[#4C80F1] rounded-[0.25rem] `}
//       onClick={onClick}>
//       {text}
//     </button>
//   );
// };

// export default ActionButton;

//

import { ActionButtonType } from '@/types/common';
import React from 'react';

const ActionButton = (props: ActionButtonType) => {
  const { text, size, onClick, disabled = false } = props;

  return (
    <button
      className={`flex items-center justify-center ${size} ${disabled ? 'bg-[#F8FAFB] border-[#CED3D6] border-[1px] text-grey/5' : 'text-[#fff] bg-[#4C80F1]'} rounded-[0.25rem] `}
      onClick={onClick}
      disabled={disabled}>
      {text}
    </button>
  );
};

export default ActionButton;
