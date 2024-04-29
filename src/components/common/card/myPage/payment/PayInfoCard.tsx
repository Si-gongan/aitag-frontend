import React from 'react';
import TextSubTitleField from '../../../text/TextSubTitleField';
import { InfoCardType } from '@/types/common';
import TextFieldContent from '@/components/common/text/TextFieldContent';
import TextTitleField from '@/components/common/text/TextTitleField';
import TextFieldIntro from '@/components/common/text/TextFiledIntro';
import ActionButtonGray from '@/components/common/button/ActionButtonGray';

const PayInfoCard = (props: InfoCardType) => {
  const { title } = props;

  return (
    <div className=" w-[29.7rem] py-3 rounded-md border-grey/3 border-[1px] ">
      <div className="py-3 h-1/3 pl-[0.875rem]  border-b-1 bg-grey/0">
        <TextSubTitleField text={title} style="text-[#2C2C2C]" />
      </div>
      <div className="w-full h-full ">
        <div className="flex px-[0.875rem] justify-between">
          <div className="w-[43%]">
            <TextFieldContent text="내 요금제" />
            <TextTitleField text="BASIC" />
            <TextFieldIntro style="font-normal" text="매월 0일 결제 예정" />
            <div className="flex justify-between">
              <ActionButtonGray text="요금제 변경" size="w-[5.63rem] h-8" />
              <ActionButtonGray text="요금제 해지" size="w-[5.63rem] h-8" />
            </div>
          </div>
          <div className=" w-[43%]">
            <TextFieldContent text="보유 Credit" />
            <TextTitleField text="45 Credit" />
            <br />
            <div className="flex justify-between">
              <ActionButtonGray text="Credit 구매하기" size="w-[7.5rem] h-8" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayInfoCard;
