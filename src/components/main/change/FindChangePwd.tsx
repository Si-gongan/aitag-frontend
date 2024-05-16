'use client';

import React from 'react'
import Link from 'next/link';
import { useState } from 'react';
import { MouseEvent } from 'react';
import { FiEyeOff, FiEye } from 'react-icons/fi'
import { API_ROUTE, PATH } from '@/utils/routes';
import Image from 'next/image';
import AlertDanger from '@/components/common/alert/AlertDanger';

interface FormData {
    currentPassword: string;
    newPassword: string;
}

interface ApiResponse {
    statusCode: number;
    result: {
      clientId: string;
    }
}

export default function FindChangePwd() {

    const [formData, setFormData] = useState<FormData>({ currentPassword: '', newPassword: '' });
    const [currShowPwd, setCurrShowPwd] = useState(false)
    const [showPwd, setShowPwd] = useState(false)
    const [showPwdCheck, setShowPwdCheck] = useState(false);
    const [pwdCheck, setPwdCheck] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState<string>('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (!formData.currentPassword || !formData.newPassword) {
            setError('모든 필드를 채워주세요.');
            return;
        }
        if (formData.newPassword.length < 8){
            setError('비밀번호가 8자리 이상이 아닙니다.')
            return;
        }
        if (formData.newPassword !== pwdCheck) {
            setError('새로운 비밀번호가 일치하지 않습니다.');
            return;
        }
        if (formData.currentPassword == formData.newPassword){
            setError('현재 비밀번호와 새 비밀번호가 동일합니다.')
            return;
        }

        try {
            const token = localStorage.getItem('token');
            if (!token) {
                throw new Error('토큰이 유효하지 않습니다.');
            }
            const response = await fetch(API_ROUTE.CHANGE_PWD, {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json' ,
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(formData)
            });

        if (!response.ok) {
            const errorData: ApiResponse = await response.json(); 
            throw new Error('현재 비밀번호가 일치하지 않습니다.');
        }
        const data: ApiResponse = await response.json();
        setMessage('비밀번호가 성공적으로 변경되었습니다.');
        } catch (error: any) {
        setError(error.message || '비밀번호를 변경할 수 없습니다.');
        }
    };

    const togglePasswordVisibility = (e: MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        setCurrShowPwd(!currShowPwd);
      };
      const togglePasswordVisibility1 = (e: MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        setShowPwd(!showPwd);
      };
      const togglePasswordVisibility2 = (e: MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        setShowPwdCheck(!showPwdCheck);
      };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#FAFBFC] px-6">
      <div className="w-full h-3/5 max-w-4xl">
        {!message ?( 
            <form onSubmit={handleSubmit}>
            <h1 className="text-32 font-bold text-center text-gray-800 mb-15">비밀번호 변경</h1>
            <div className='mb-60'>
                <h1 className='text-16 text-center text-gray-600'>가입된 계정의 새로운 비밀번호를 입력해주세요.</h1>
                <AlertDanger message={error} />
            </div>
            <div className="mb-30 mx-auto relative px-8">
                <h1 className='text-14 font-bold text-left mb-3'>현재 비밀번호</h1>
                <input className="border h-53 rounded-lg w-full py-10 px-15 text-gray-700 text-16 focus:outline-none" id="currentPassword" type={showPwd ? "text" : 'password'} placeholder="현재 비밀번호를 입력해주세요" onChange={handleChange}/>
                <div onClick={togglePasswordVisibility} className='absolute bottom-20 right-15 text-gray-700'>
                    {currShowPwd ? <FiEye /> : <FiEyeOff /> }
                </div>
            </div>
            <div className="mb-30 mx-auto relative px-8">
                <h1 className='text-14 font-bold text-left mb-3'>새 비밀번호</h1>
                <input className="border h-53 rounded-lg w-full py-10 px-15 text-gray-700 text-16 focus:outline-none" id="newPassword" type={showPwd ? "text" : 'password'} placeholder="새 비밀번호를 입력해주세요" onChange={handleChange}/>
                <div onClick={togglePasswordVisibility1} className='absolute bottom-20 right-15 text-gray-700'>
                    {showPwd ? <FiEye /> : <FiEyeOff /> }
                </div>
            </div>
            <div className="mb-30 mx-auto relative px-8">
                <h1 className='text-14 font-bold text-left mb-3'>새 비밀번호 확인</h1>
                <input className="border h-53 rounded-lg w-full py-10 px-15 text-gray-700 text-16focus:outline-none" id="pwdcheck" type={showPwd ? "text" : 'password'} placeholder="새 비밀번호를 다시 입력해주세요" onChange={(e) => setPwdCheck(e.target.value)}/>
                <div onClick={togglePasswordVisibility2} className='absolute bottom-15 right-15 text-gray-700'>
                    {showPwdCheck ? <FiEye /> : <FiEyeOff /> }
                </div>
            </div>
            <div className = 'px-8'>
                <button className="w-full h-53 text_16 bg-[#4C80F1] hover:bg-blue-700 text-white py-8 rounded-lg focus:outline-none mb-30" type="submit">
                    비밀번호 변경하기
                </button>
                <Link href={PATH.LOGIN}>
                    <button className="border w-full h-53 text_16 text-[#4D5256] py-8 rounded-lg focus:outline-none">로그인으로 돌아가기</button>
                </Link>
            </div>
            </form>
        ) : (
            <div>
                <div className='flex justify-center items-center h-full'>
                    <Image src="/images/icon-check.svg" alt="체크 아이콘" width={100} height={100} />
                </div>
                <div className='text-20 text-center text-[#4D5256] mt-20 mb-100'>
                    <p>비밀번호를 성공적으로 변경하였습니다.</p>
                </div>
                <Link href={PATH.LOGIN}>
                    <button className="w-full h-53 text_16 bg-[#4C80F1] text-white py-8 rounded-lg focus:outline-none mb-30">로그인</button>
                </Link>
            </div>
        )}       
      </div>
    </div>
  )
}