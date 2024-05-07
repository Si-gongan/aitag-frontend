import { TextFiledGrayType } from '@/types/common';
import React from 'react';

const TextFieldGray = (props: TextFiledGrayType) => {
  const { text } = props;

  return <p className="text-gray-600 text-12">{text}</p>;
};

export default TextFieldGray;
