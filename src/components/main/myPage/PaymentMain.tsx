import InfoBoard from '@/components/layout/InfoBoard';
import MainLayout from '@/components/layout/MainLayout';
import NavigationBar from '@/components/layout/NavigationBar';
import React from 'react';

const PaymentMain = () => {
  return (
    <MainLayout>
      <div className="w-full bg-[#F6F7F9] my-10 ">
        <div className="flex justify-between ">
          <NavigationBar />
          <InfoBoard />
          {/* <div className="mx-[12.5rem] my-[3.5rem]  grid"></div> */}
        </div>
      </div>
    </MainLayout>
  );
};

export default PaymentMain;
