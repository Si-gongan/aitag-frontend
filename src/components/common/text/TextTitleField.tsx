import { TextTitleFieldType } from '@/types/common';
import React from 'react';

const TextTitleField = (props: TextTitleFieldType) => {
  const { text } = props;

  return <h1 className="text-32 font-bold text-grey/7">{text}</h1>;
};

export default TextTitleField;
