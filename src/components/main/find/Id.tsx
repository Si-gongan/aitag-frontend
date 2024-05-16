'use client';

import React from 'react'
import Link from 'next/link';
import { API_ROUTE, PATH } from '@/utils/routes';
import { useState } from 'react';
import AlertDanger from '@/components/common/alert/AlertDanger';

interface FormData {
  name: string;
  email: string;
}

interface ApiResponse {
  statusCode: number;
  result: {
    clientId: string;
    message: string;
  }
}

export default function Id() {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '' });
  const [ClientId, setClientId] = useState<string | null>(null);
  const [error, setError] = useState<string>('');
  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!formData.name || !formData.email) {
        setError('모든 필드를 채워주세요.');
        return;
    }

    try {
      const response = await fetch(API_ROUTE.FIND_ID, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data: ApiResponse = await response.json();

      if (!response.ok) {
        throw new Error(data.result?.message);
      }
      
      setClientId(data.result.clientId); // 마스킹된 아이디
    } catch (error: unknown) {
      if(error instanceof Error ){
        console.error(error.message);
        setError(error.message);
      }else{
        console.error('알 수 없는 오류가 발생했습니다.', error);
        setError('알 수 없는 오류가 발생했습니다.');
      } 
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#FAFBFC] px-6">
      <div className="w-full h-3/5 max-w-4xl">
        <h1 className="text-32 font-bold text-center text-gray-800 mb-15">아이디 찾기</h1>
        {!ClientId ?( 
          <form onSubmit={handleSubmit}>
          <div className='mb-60'>
            <h1 className='text-16 text-center text-gray-600'>가입된 계정 정보를 입력해주세요.</h1>
            <AlertDanger message={error} />
          </div>
          <div className="mb-30 px-8">
            <h1 className='text-14 font-bold text-left mb-3'>이름 / 기업명</h1>
            <input className="border h-53 rounded-lg w-full py-10 px-15 text-gray-700 text-16 focus:outline-none" id="name" type= "text" placeholder="이름 혹은 기업명을 입력해주세요" onChange={handleChange}/>
          </div>
          <div className="mb-30 px-8">
            <h1 className='text-14 font-bold text-left mb-3'>이메일</h1>
            <input className="border h-53 rounded-lg w-full py-10 px-15 text-gray-700 text-16 focus:outline-none" id="email" type= "email" placeholder="이메일을 입력해주세요" onChange={handleChange}/>
          </div>
          <button className="px-8 w-full h-53 text_16 bg-[#4C80F1] hover:bg-blue-700 text-white py-8 rounded-lg focus:outline-none" type="submit">
              확인
          </button>
        </form>
        ) : (
          <div>
            <div className='text-16 text-center text-gray-600 mt-60 mb-100'>
              <p>해당 계정의 아이디는 {ClientId} 입니다.</p>
            </div>
            <button className="w-full h-53 text_16 bg-[#4C80F1] text-white py-8 rounded-lg focus:outline-none mb-30" onClick={() => setClientId(null)}>확인</button>
            <Link href={PATH.LOGIN}>
              <button className="border w-full h-53 text_16 text-[#4D5256] py-8 rounded-lg focus:outline-none">로그인으로 돌아가기</button>
            </Link>
          </div>
        )}       
      </div>
    </div>
  )
}
