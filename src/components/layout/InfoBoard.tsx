import React from 'react';
import TextTitleField from '../common/text/TextTitleField';
import TextFieldContent from '../common/text/TextFieldContent';
import TextFieldIntro from '../common/text/TextFiledIntro';
import TextSubTitleField from '../common/text/TextSubTitleField';
import InfoCard from '../common/card/myPage/payment/PayMethodAdminCard';
import PayMethodCardAdminCard from '../common/card/myPage/payment/PayMethodAdminCard';
import PayInfoCard from '../common/card/myPage/payment/PayInfoCard';

const InfoBoard = () => {
  return (
    <div className="px-[4.38rem] py-10 w-[71rem] bg-[#fff]">
      <div className="mb-6">
        <TextTitleField text="마이 페이지" />
        <TextFieldIntro
          style="font-bold"
          text="마이페이지 입니다. 개인정보를 수정하고 결제 내역과 History를 볼 수 있습니다"
        />
      </div>
      <hr />
      <div className="mt-6 mb-[1.4rem]">
        <TextSubTitleField text="결제정보" style="text-[#2C2C2C]" />
      </div>
      <div className="w-full ">
        <div className="flex w-full justify-between">
          <PayInfoCard title={'요금제 정보'} />
          <PayMethodCardAdminCard title={'결제 수단 관리'} />
        </div>
      </div>
    </div>
  );
};

export default InfoBoard;
