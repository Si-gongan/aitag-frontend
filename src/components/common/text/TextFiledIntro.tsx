import { TextIntroContentFieldType } from '@/types/common';
import React from 'react';

const TextFieldIntro = (props: TextIntroContentFieldType) => {
  const { text, style } = props;

  return <p className={` ${style} text-[1rem]  text-dark-500 `}>{text}</p>;
};

export default TextFieldIntro;
