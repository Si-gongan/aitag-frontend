import React from 'react';
import TextTitleField from './TextTitleField';
import { TextSubTitleFieldType } from '@/types/common';

const TextSubTitleField = (props: TextSubTitleFieldType) => {
  const { text, style } = props;

  return <h4 className={`text-[1.50rem] font-bold ${style}`}>{text}</h4>;
};

export default TextSubTitleField;
