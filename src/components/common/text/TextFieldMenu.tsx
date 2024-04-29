import { TextFiledMenuType } from '@/types/common';
import Link from 'next/link';
import React from 'react';

const TextFieldMenu = (props: TextFiledMenuType) => {
  const { text } = props;

  return (
    <Link href={'#'}>
      <p className="text-gray-6 text-base  font-medium">{text}</p>
    </Link>
  );
};

export default TextFieldMenu;
