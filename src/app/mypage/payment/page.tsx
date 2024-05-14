'use client';

import MyPlanInfo from '@/components/main/myPage/MyPlanInfo';
import MypageSidemenu from '@/components/main/myPage/MypageSidemenu';
import MypageTitle from '@/components/main/myPage/MypageTitle';
import { GetUserInfoType } from '@/types/common';
import { fetchWithInterceptor } from '@/utils/fetchWithInterceptor';
import { API_ROUTE } from '@/utils/routes';
import { useEffect, useState } from 'react';
import { ReteMock } from '../../../components/main/support/mock';
import MyCardInfo from '@/components/main/myPage/MyCardInfo';
import PaymentTable from '@/components/main/myPage/PaymentTable';
import PaymentSectionLayout from '@/components/main/myPage/PaymentSectionLayout';

export default function Payment() {
  const [userInfo, setUserInfo] = useState<GetUserInfoType>();
  const getUserInfo = async () => {
    const options = {
      method: 'GET',
    };
    const response = await fetchWithInterceptor(API_ROUTE.GET_USER_INFO, options);
    const result = await response.json();
    const data = result.result;
    setUserInfo(data);
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <div className="flex justify-center w-full bg-[#FAFBFC] py-40 gap-42">
      <MypageSidemenu />
      <main className="flex flex-col max-w-[1136px] min-w-1136 gap-28 py-41 px-70 bg-white rounded-10">
        <MypageTitle
          title="마이페이지"
          description="마이페이지입니다. 개인정보를 수정하고 결제 내역과 History를 볼 수 있습니다."
        />
        <hr className="border-1 border-grey/3 w-full" />
        <div className="flex flex-col gap-38 w-full px-13">
          <PaymentSectionLayout title="결제정보">
            {userInfo && <MyPlanInfo rate={userInfo.rate} credit={userInfo.credit} />}
            {/* {userInfo && <MyPlanInfo rate={ReteMock.rate} credit={ReteMock.credit} />} */}
            <MyCardInfo />
          </PaymentSectionLayout>
          <PaymentSectionLayout title="결제 내역 확인하기">
            <PaymentTable />
          </PaymentSectionLayout>
        </div>
      </main>
    </div>
  );
}
