import { TextFiledWhiteType } from '@/types/common';
import React from 'react';

const TextFiledWhite = (props: TextFiledWhiteType) => {
  const { text, style } = props;
  return <p className={`text-[#F8FAFB] ${style} `}>{text}</p>;
};

export default TextFiledWhite;
