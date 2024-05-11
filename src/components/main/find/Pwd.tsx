'use client';

import React from 'react'
import Link from 'next/link';
import { useState } from 'react';
import { API_ROUTE, PATH } from '@/utils/routes';

interface FormData {
  clientId: string;
  email: string;
}

interface ApiResponse {
  statusCode: number;
  result: {
    clientId: string;
    email: string;
  }
}

export default function Pwd() {
  const [formData, setFormData] = useState<FormData>({ clientId: '', email: '' });
  const [email, setEmail] = useState<string | null>(null);
  const [error, setError] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!formData.clientId || !formData.email) {
        setError('모든 필드를 채워주세요.');
        return;
    }

    try {
      const response = await fetch(API_ROUTE.FIND_PWD, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (!response.ok) {
        throw new Error('서버오류');
      }
      const data: ApiResponse = await response.json();      
      setEmail(data.result.email); // 마스킹된 이메일
      //이메일로 비밀번호 전송
    } catch (error: any) {
      setError('아이디 또는 이메일이 존재하지 않습니다. 계정 정보를 다시 입력해주세요.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#FAFBFC] px-6">
      <div className="w-full h-3/5 max-w-4xl">
        {!email ?( 
          <form className="px-8" onSubmit={handleSubmit}>
          <h1 className="text-32 font-bold text-center text-gray-800 mb-15">비밀번호 찾기</h1>
          <h1 className='text-16 text-center text-gray-600 mb-100'>가입된 계정 정보를 입력해주세요.</h1>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <div className="mb-30">
            <h1 className='text-14 font-bold text-left mb-3'>아이디</h1>
            <input className="border h-53 rounded-lg w-full py-10 px-15 text-gray-700 text-16 focus:outline-none" id="clientId" type= "text" placeholder="아이디를 입력해주세요" onChange={handleChange}/>
          </div>
          <div className="mb-30">
            <h1 className='text-14 font-bold text-left mb-3'>이메일</h1>
            <input className="border h-53 rounded-lg w-full py-10 px-15 text-gray-700 text-16 focus:outline-none" id="email" type= "email" placeholder="이메일을 입력해주세요" onChange={handleChange}/>
          </div>
          <button className="w-full h-53 text_16 bg-[#4C80F1] hover:bg-blue-700 text-white py-8 rounded-lg focus:outline-none" type="submit">
              확인
          </button>
        </form>
        ) : (
          <div>
            <h1 className="text-32 font-bold text-center text-gray-800 mb-15">이메일을 확인해주세요</h1>
            <div className='text-16 text-center text-gray-600 mt-60 mb-100'>
              <p>{email} 로 초기화된 비밀번호를 전송해드렸습니다.</p>
              <p>로그인 후 반드시 비밀번호를 변경해주세요.</p>
            </div>
            <div className='text-16 text-center text-gray-600 mb-30'>
              <p>이메일을 받지 못하셨나요?</p>
              <p>스펨메일함을 확인해보시거나 이메일을 다시 받아보세요.</p>
            </div>
            {/* <button className="w-full h-53 text_16 bg-[#4C80F1] text-white py-8 rounded-lg focus:outline-none mb-30" onClick={() => setEmail(null)}>이메일 재전송</button> */}
            <Link href={PATH.CHANGE_FIND_PWD}>
              <button className="border w-full h-53 text_16 text-[#4D5256] py-8 rounded-lg focus:outline-none">비밀번호 변경하기</button>
            </Link>
          </div>
        )}       
      </div>
    </div>
  )
}