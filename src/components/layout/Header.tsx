import Image from 'next/image';
import React from 'react';

import ActionButton from '../common/button/ActionButton';
import LogoIcon from '@/assets/logo-icon.svg';
import TextFieldMenu from '../common/text/TextFieldMenu';

const Header = () => {
  return (
    <header className="w-full h-16 bg-[#FFF]">
      <div className="mx-[12rem] ">
        <div className="w-full flex justify-between my-4">
          <div>
            <Image src={LogoIcon} alt="글공방" />
          </div>
          <div className="flex justify-between w-[29vw]">
            <div className="flex justify-between items-center mr-7 w-full">
              <div>
                <TextFieldMenu text={'워크스페이스'} />
              </div>
              <p>|</p>
              <div>
                <TextFieldMenu text={'요금제'} />
              </div>
              <p>|</p>
              <div>
                <TextFieldMenu text={'고객센터'} />
              </div>
            </div>
            <div className="h-5">
              <ActionButton
                text={'시작하기'}
                size={'w-[7.35rem] py-[0.55rem]'}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
