import { TextContentFieldType } from '@/types/common';
import React from 'react';

const TextFieldContent = (props: TextContentFieldType) => {
  const { text } = props;

  return <p className="text-[1rem] font-normal text-gray-6 ">{text}</p>;
};

export default TextFieldContent;
