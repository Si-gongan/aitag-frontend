'use client';

import React from 'react'
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { ChangeEvent, FormEvent, MouseEvent } from 'react';

interface FormData {
  name: string;
  email: string;
}

interface ApiResponse {
  statusCode: number;
  result: {
    clientId: string;
  }
}

export default function findID() {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '' });
  const [ClientId, setClientId] = useState<string | null>(null);
  const [error, setError] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('https://gongbang.sigongan-ai.shop/user/find/client-id', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (!response.ok) {
        throw new Error('서버오류');
      }
      const data: ApiResponse = await response.json();
      setClientId(data.result.clientId); // 마스킹된 아이디
    } catch (error: any) {
      setError('아이디가 존재하지 않습니다. 계정 정보를 다시 입력해주세요.');
    }
  };

  return (
    <div className="flex items-center justify-center h-[calc(100vh-63px)] bg-[#FAFBFC] px-6">
      <div className="w-full h-3/5 max-w-4xl">
        <h1 className="text-32 font-bold text-center text-gray-800 mb-15">아이디 찾기</h1>
        {!ClientId ?( 
          <form className="px-8" onSubmit={handleSubmit}>
          <h1 className='text-16 text-center text-gray-600 mb-100'>가입된 계정 정보를 입력해주세요.</h1>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <div className="mb-30">
            <h1 className='text-14 font-bold text-left mb-3'>이름 / 기업명</h1>
            <input className="border h-53 rounded-lg w-full py-10 px-15 text-gray-700 text-16 focus:outline-none" id="name" type= "text" placeholder="이름 혹은 기업명을 입력해주세요" onChange={handleChange}/>
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
            <div className='text-16 text-center text-gray-600 mt-60 mb-100'>
              <p>해당 계정의 아이디는 {ClientId} 입니다.</p>
            </div>
            <button className="w-full h-53 text_16 bg-[#4C80F1] text-white py-8 rounded-lg focus:outline-none mb-30" onClick={() => setClientId(null)}>확인</button>
            <Link href="/login">
              <button className="w-full h-53 text_16 bg-[#CED3D6] text-[#4D5256] py-8 rounded-lg focus:outline-none">로그인으로 돌아가기</button>
            </Link>
          </div>
        )}       
      </div>
    </div>
  )
}

