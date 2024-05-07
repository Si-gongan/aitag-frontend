import { TextContentFieldType } from '@/types/common';
import React from 'react';

const TextFieldContent = (props: TextContentFieldType) => {
  const { text } = props;

  return <p className="text-16 font-normal text-[4D5256]">{text}</p>;
};

export default TextFieldContent;
