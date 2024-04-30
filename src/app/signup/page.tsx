import Link from 'next/link';
'use client';
import { MouseEvent, useState } from 'react';
import {FiEyeOff, FiEye} from 'react-icons/fi';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

export default function Signup() {

  const[showPwd, setShowPwd] = useState(false)
  const pressShow = (e: MouseEvent) => {
    e.preventDefault();
    setShowPwd(!showPwd)
  }

  const[phoneNum, setPhoneNum] = useState('');
  const[valid, setValid] = useState(true);

  const handleChange = (e: { target: { value: any; }; }) => {
    const input = e.target.value;
    setPhoneNum(input);
    setValid(validPhoneNum(input));
  };

  const validPhoneNum = (phoneNum: string) => {
    const phoneNumPattern = /^\d{11}$/;
    return phoneNumPattern.test(phoneNum);
  }

  return (
    <div className="flex items-center justify-center h-[calc(100vh-63px)] bg-gray-50 px-6">
      <div className="w-full h-fit max-w-4xl">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">회원가입</h1>
        <h1 className='text-xl text-center text-gray-600 mb-20'>회원가입을 위해 아래의 정보를 입력해주세요</h1>
        <form className="px-8 pt-6 pb-8 mb-4">
          <div className="mb-10">
            <h1 className='text-lg font-bold text-left mb-3'>이름 / 기업명</h1>
            <input className="border rounded-lg w-full py-10 px-15 text-gray-700 focus:outline-none" id="name" type= "text" placeholder="이름 혹은 기업명을 입력해주세요" />
          </div>
          <div className="mb-10">
            <h1 className='text-lg font-bold text-left mb-3'>아이디</h1>
            <input className="border rounded-lg w-full py-10 px-15 text-gray-700 focus:outline-none" id="newId" type= "text" placeholder="아이디를 입력해주세요" />
          </div>
          <div className="mb-10">
            <h1 className='text-lg font-bold text-left mb-3'>이메일</h1>
            <input className="border rounded-lg w-full py-10 px-15 text-gray-700 focus:outline-none" id="email" type= "text" placeholder="이메일 주소를 입력해주세요" />
          </div>
          <div className="mb-10 mx-auto relative">
            <h1 className='text-lg font-bold text-left mb-3'>비밀번호</h1>
            <input className="border rounded-lg w-full py-10 px-15 text-gray-700 focus:outline-none" id="pwd" type={showPwd ? "text" : 'password'} placeholder="비밀번호를 입력해주세요" />
            <button onClick = {e=>pressShow(e)} className='absolute bottom-15 right-15 text-gray-700'>
              {showPwd ? <FiEye /> : <FiEyeOff /> }
            </button>
          </div>
          <div className="mb-10 mx-auto relative">
            <h1 className='text-lg font-bold text-left mb-3'>비밀번호 확인</h1>
            <input className="border rounded-lg w-full py-10 px-15 text-gray-700 focus:outline-none" id="pwdcheck" type={showPwd ? "text" : 'password'} placeholder="비밀번호를 다시 입력해주세요" />
            <button onClick = {e=>pressShow(e)} className='absolute bottom-15 right-15 text-gray-700'>
              {showPwd ? <FiEye /> : <FiEyeOff /> }
            </button>
          </div>
          <div className="mb-20">
            <h1 className='text-lg font-bold text-left mb-3'>전화번호 (선택)</h1>
            <input className="border rounded-lg w-full py-10 px-15 text-gray-700 focus:outline-none" id="phone" type= "text" value = {phoneNum} onChange={handleChange} />
          </div>
          <button className="w-full bg-blue-500 hover:bg-blue-700 text-white py-8 rounded-lg focus:outline-none" type="submit">
              회원가입하기
            </button>
        </form>
      </div>
    </div>
  );
}
