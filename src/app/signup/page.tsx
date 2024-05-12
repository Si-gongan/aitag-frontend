// src/app/signup/page.tsx
'use client';
import { API_ROUTE, PATH } from '@/utils/routes';
import { ChangeEvent, FormEvent, MouseEvent, useState } from 'react';
import axios, { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { FiEyeOff, FiEye } from 'react-icons/fi';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

export default function Signup() {

  const[formData, setFormData] = useState({
    clientId: '',
    password: '',
    name: '',
    email: '',
    phone: ''
  })

  const [showPwd, setShowPwd] = useState(false)
  const [showPwdCheck, setShowPwdCheck] = useState(false);
  const [pwdCheck, setPwdCheck] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handlePhoneChange = (phone:string) => {
    setFormData(prev => ({ ...prev, phone }));
  };


  // checkId
  // const checkClientId = async (clientId: string) => {
  //   try {
  //     const response = await axios.get(API_ROUTE.GET_CLIENT_ID);
  //     if (!response.data.result.isPossible) {
  //       setErrorMessage('이미 사용 중인 아이디입니다.');
  //     } else {
  //       setErrorMessage('');
  //     }
  //   } catch (error) {
  //     console.error('아이디 중복 확인 실패:', error);
  //   }
  // };

  // const checkEmail = async (email: string) => {
  //   try {
  //     const response = await axios.get(API_ROUTE.GET_EMAIL);
  //     if (!response.data.result.isPossible) {
  //       setErrorMessage('이미 사용 중인 이메일입니다.');
  //     } else {
  //       setErrorMessage('');
  //     }
  //   } catch (error) {
  //     console.error('이메일 중복 확인 실패:', error);
  //   }
  // };

  // const handleBlurClientId = () => {
  //   checkClientId(formData.clientId);
  // };

  // const handleBlurEmail = () => {
  //   checkEmail(formData.email);
  // };


  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage(''); // Reset error message
    if (formData.password !== pwdCheck) {
      setErrorMessage('비밀번호가 일치하지 않습니다.');
      return;
    }
    //비밀번호 조건 추후 추가
    if (formData.password.length < 8){
      setErrorMessage('비밀번호가 8자리 이상이 아닙니다.')
      return;
    }
    if (!formData.clientId || !formData.password || !formData.name || !formData.email) {
      setErrorMessage('모든 필수 필드를 채워주세요.');
      return;
    }

    try {
      const response = await fetch(API_ROUTE.SIGN_UP, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          clientId: formData.clientId,
          password: formData.password,
          name: formData.name,
          email: formData.email,
          phone: formData.phone
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        setErrorMessage(errorData.message || '서버 오류로 회원가입에 실패했습니다.');
        return;
      }

      const data = await response.json();
      localStorage.setItem('token', data.result.token);
      alert('회원가입 성공!');
      router.push(PATH.LOGIN); // Redirect to login page
    } catch (error) {
      console.error('회원가입 실패:', error);
      setErrorMessage('네트워크 오류 또는 서버 접속이 불가능합니다.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#FAFBFC] bg-[#FAFBFC] px-6">
      <div className="w-full h-3/5 max-w-4xl">
        <h1 className="text-32 font-bold text-center text-gray-800 mt-50 mb-10">회원가입</h1>
        <h1 className='text-16 text-center text-gray-600 mb-50'>회원가입을 위해 아래의 정보를 입력해주세요</h1>
        {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}
        <form className="px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
          <div className="mb-20">
            <h1 className='text-14 font-bold text-left mb-3'>이름 / 기업명</h1>
            <input className="border h-53 rounded-lg w-full py-10 px-15 text-gray-700 text-16 focus:outline-none" id="name" type= "text" placeholder="이름 혹은 기업명을 입력해주세요" onChange={handleChange}/>
          </div>
          <div className="mb-20">
            <h1 className='text-14 font-bold text-left mb-3'>아이디</h1>
            <input className="border h-53 rounded-lg w-full py-10 px-15 text-gray-700 text-16 focus:outline-none" id="clientId" type= "text" placeholder="아이디를 입력해주세요" onChange={handleChange}/>
          </div>
          <div className="mb-20">
            <h1 className='text-14 font-bold text-left mb-3'>이메일</h1>
            <input className="border h-53 rounded-lg w-full py-10 px-15 text-gray-700 text-16 focus:outline-none" id="email" type= "email" placeholder="이메일 주소를 입력해주세요" onChange={handleChange}/>
          </div>
          <div className="mb-20 mx-auto relative">
            <h1 className='text-14 font-bold text-left mb-3'>비밀번호</h1>
            <input className="border h-53 rounded-lg w-full py-10 px-15 text-gray-700 text-16 focus:outline-none" id="password" type={showPwd ? "text" : 'password'} placeholder="비밀번호를 입력해주세요" onChange={handleChange}/>
            <button onClick={() => setShowPwd(!showPwd)} className='absolute bottom-15 right-15 text-gray-700'>
              {showPwd ? <FiEye /> : <FiEyeOff /> }
            </button>
          </div>
          <div className="mb-20 mx-auto relative">
            <h1 className='text-14 font-bold text-left mb-3'>비밀번호 확인</h1>
            <input className="border h-53 rounded-lg w-full py-10 px-15 text-gray-700 text-16focus:outline-none" id="pwdcheck" type={showPwdCheck ? "text" : 'password'} placeholder="비밀번호를 다시 입력해주세요" onChange={(e) => setPwdCheck(e.target.value)}/>
            <button onClick={() => setShowPwdCheck(!showPwdCheck)} className='absolute bottom-15 right-15 text-gray-700'>
              {showPwdCheck ? <FiEye /> : <FiEyeOff /> }
            </button>
          </div>
          <div className="mb-30">
            <h1 className='text-l4 font-bold text-left mb-3'>전화번호 (선택)</h1>
            <PhoneInput 
                country={'kr'}
                value={formData.phone}
                onChange={handlePhoneChange}
                dropdownStyle={{height:'100px'}}
                inputStyle = {{height:'50px', width: '100%'}}
              />
          </div>
          <button className="w-full h-53 text-16 bg-[#4C80F1] hover:bg-blue-700 text-white py-8 rounded-lg focus:outline-none mb-50" type="submit">
              회원가입하기
          </button>
        </form>
      </div>
    </div>
  );
}
