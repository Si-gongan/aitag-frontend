import React from 'react';

import Image from 'next/image';

import FaceBookIcon from '../../assets/facebook-icon.svg';
import InstarIcon from '../../assets/instargram-icon.svg';
import TextFieldWhite from '../common/text/TextFieldWhite';
import TextFieldGray from '../common/text/TextFieldGray';

const Footer = () => {
  return (
    <footer className="w-full relative bg-[#2E2E2E] h-[227px]"> 
      <div className="flex justify-between items-center px-100 py-30 max-w-screen-lg mx-auto">
        <div className="flex items-center">
          <Image
            src="/images/gongbang_logo.png"
            width={100}
            height={20}
            alt="글공방 로고"
          />
          <TextFieldWhite text={'글공방'} style={'ml-40 text-lg font-Pretendard'} />  
        </div>
        <div className="flex justify-between items-center w-50">
          <Image src={FaceBookIcon} width={20} height={20} alt="글공방 페이스북" />
          <Image src={InstarIcon} width={20} height={20} alt="글공방 인스타그램" />
        </div>
      </div>
      <div className="relative justify-between items-center px-100 max-w-screen-lg mx-auto mb-10">
        <TextFieldGray text={'사무실 : 서울시 용산구 이촌로 58길 19 802'}/>
        <TextFieldGray text={'전화번호 0507-0177-5941　|　이메일 sigongan22@gmail.com'} />
        <TextFieldGray
          text={'대표자 : 오주상　|　상호명 시(視)공간　|　사업자번호 : 389-43-00972　|　통신판매업 신고번호 : 제 ****-****-***** 호'}
        />
      </div>
      <div className="max-w-screen-md mx-auto border-t border-[#919191] mb-10"></div>
      <div className="relative justify-between items-center px-100 max-w-screen-lg mx-auto">
        <TextFieldGray text={'개인정보처리방침　|　이용약관　|　문의메일'} />
        <TextFieldGray text={'Copyright ⓒ 2023. 시(視)공간. All rights reserved.'} />
      </div>
    </footer>
  );
};

export default Footer;
