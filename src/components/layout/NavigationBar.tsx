import React from 'react';
import ActionButtonGray from '../common/button/ActionButtonGray';

const NavigationBar = () => {
  return (
    <div className="bg-[#fff] w-[16.4rem] pb-[42.8rem] grid  justify-center gap-4 pt-16 px-8">
      <div className="mb-8">
        <ActionButtonGray text="개인정보 수정" size="w-52 h-[54px]" />
      </div>
      <div>
        <ActionButtonGray text="개인정보 수정" size="w-52 h-[54px]" />
      </div>
    </div>
  );
};

export default NavigationBar;
