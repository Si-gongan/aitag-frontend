import React from 'react';

import Image from 'next/image';

import FaceBookIcon from '../../assets/facebook-icon.svg';
import InstarIcon from '../../assets/instargram-icon.svg';
import TextFiledWhite from '../common/text/TextFieldWhite';
import TextFieldGray from '../common/text/TextFieldGray';

const Footer = () => {
  return (
    <footer className="bg-dark-950 pl-[23rem] pr-[12rem] py-9 h-52">
      <div className="flex  justify-between h-full">
        <div>
          <TextFiledWhite text={'글공방'} />
          <TextFieldGray text={'서울시 용산구 이촌로 58길 19 802'} />
          <TextFieldGray text={'Tel. 0507-0177-5941　|　E-mail. sigongan22@gmail.com'} />
          <TextFieldGray
            text={'대표자. 오주상　|　상호명. 시(視)공간　|　사업자번호. 389-4300972　|　통신판매업 신고번호'}
          />
        </div>
        <div className="grid content-between">
          <div className="flex w-[14rem] justify-end">
            <div className="flex justify-between w-[3rem]">
              <Image src={FaceBookIcon} alt="글공방 페이스북" />
              <Image src={InstarIcon} alt="글공방 인스타그램" />
            </div>
          </div>
          <div className="text-right">
            <TextFieldGray text={'이용약관    |    개인정보처리방침'} />
            <TextFieldGray text={'Copyright ⓒ 2023 시(視)공간 All rights reserved.'} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
