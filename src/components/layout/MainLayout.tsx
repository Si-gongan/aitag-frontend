import Image from 'next/image';
import React from 'react';

import { MainLayoutType } from '@/types/common';
import ActionButton from '../common/button/ActionButton';

import Header from './Header';
import Footer from './Footer';

const MainLayout = (props: MainLayoutType) => {
  return (
    <div className="bg-[#F6F7F9]">
      <Header />
      <div>{props.children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
