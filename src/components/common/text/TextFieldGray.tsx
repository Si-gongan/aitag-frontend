import { TextFiledGrayType } from '@/types/common';
import React from 'react';

const TextFieldGray = (props: TextFiledGrayType) => {
  const { text } = props;

  return <p className="text-gray-600 text-[0.625rem]">{text}</p>;
};

export default TextFieldGray;
