'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import TextFieldWhite from '../common/text/TextFieldWhite';
import TextFieldGray from '../common/text/TextFieldGray';
import Link from 'next/link';
import ModalOpinion from '../common/modal/ModalOpinion';

const Footer = () => {
  const [showModalOpinion, setShowModalOpinion] = useState<boolean>(false);

  return (
    <footer className="w-full relative bg-[#2E2E2E] pb-24">
      <div className="flex justify-between items-center px-100 pt-24 pb-8 max-w-screen-lg mx-auto">
        <div className="flex items-center">
          <Image src="/images/gongbang_logo.png" width={100} height={20} alt="글공방 로고" />
          <TextFieldWhite text={'에이택'} style={'ml-40 text-lg font-Pretendard'} />
        </div>
        <div className="flex justify-between items-center gap-12">
          <Link href="https://www.instagram.com/sigongan.official?igsh=MzRlODBiNWFlZA==" target="_blank">
            <Image src="/images/instagram.svg" width={44} height={44} alt="글공방 페이스북" />
          </Link>
          <Link href="https://www.facebook.com/profile.php?id=100089078353915" target="_blank">
            <Image src="/images/facebook.svg" width={44} height={44} alt="글공방 인스타그램" />
          </Link>
        </div>
      </div>
      <div className="relative justify-between items-center px-100 max-w-screen-lg mx-auto mb-10">
        <TextFieldGray text={'사무실 : 서울시 용산구 이촌로 58길 19 802'} />
        <TextFieldGray text={'전화번호 010-4248-0230 | 이메일 sigongan22@gmail.com'} />
        <TextFieldGray
          text={
            '대표자 : 오주상 | 상호명 시공간 | 사업자번호 : 389-43-00972 | 통신판매업 신고번호 : 제 ****-****-***** 호'
          }
        />
      </div>
      <div className="relative justify-between items-center px-100 max-w-screen-lg mx-auto">
        <div className="max-w-screen-lg mx-auto border-t border-[#919191] mb-10"></div>
        <div className="flex items-center gap-12 text-white text-12">
          <Link href="/">개인정보처리방침</Link>
          <hr className="h-12 border-1 border-[#919191]" />
          <Link href="/">이용약관</Link>
          <hr className="h-12 border-1 border-[#919191]" />
          <button onClick={() => setShowModalOpinion(true)}>문의메일</button>
        </div>
        <TextFieldGray text={'Copyright ⓒ 2023. 시공간. All rights reserved.'} />
      </div>
      {showModalOpinion && <ModalOpinion onClose={() => setShowModalOpinion(false)} />}
    </footer>
  );
};

export default Footer;
