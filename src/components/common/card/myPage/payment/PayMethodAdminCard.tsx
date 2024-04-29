import React from 'react';
import TextSubTitleField from '../../../text/TextSubTitleField';
import { InfoCardType } from '@/types/common';
import TextFieldContent from '@/components/common/text/TextFieldContent';
import ActionButtonGray from '@/components/common/button/ActionButtonGray';

const PayMethodCardAdminCard = (props: InfoCardType) => {
  const { title } = props;

  return (
    <div className="w-[29.7rem] h-[11.7rem] rounded-md border-grey/3 border-[1px] ">
      <div className="py-3 h-1/3 px-[0.875rem] border-b-1 bg-grey/0 flex justify-between">
        <TextSubTitleField text={title} style="text-[#2C2C2C]" />
        <ActionButtonGray text="결제수단 등록" size="w-[7.5rem] h-8" />
      </div>
      <div className="w-full h-[11.7rem]">
        <div className="flex">
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default PayMethodCardAdminCard;
