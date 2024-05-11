// src/app/signup/page.tsx
'use client';
import {API_ROUTE, PATH} from '@/utils/routes';
import { ChangeEvent, FormEvent, MouseEvent, useState } from 'react';
import axios, {AxiosError} from 'axios';
import { useRouter } from 'next/navigation';
import {FiEyeOff, FiEye} from 'react-icons/fi';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

export default function Signup() {

  // 에러 메시지
  interface ErrorResponse {
    message: string; 
  }

  const[formData, setFormData] = useState({
    clientId: '',
    password: '',
    name: '',
    email: '',
    phone: ''
  })

  const[showPwd, setShowPwd] = useState(false)
  const [pwdCheck, setPwdCheck] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();
  
  const pressShow = (e: MouseEvent) => {
    e.preventDefault();
    setShowPwd(!showPwd)
  }

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
      const response = await axios.post(API_ROUTE.SIGN_UP, {
        clientId: formData.clientId,
        password: formData.password,
        name: formData.name,
        email: formData.email,
        phone: formData.phone
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      localStorage.setItem('token', response.data.result.token);
      alert('회원가입 성공!');
      console.log('회원가입 성공:', response.data);
      router.push(PATH.LOGIN); // Redirect to login page
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        const axiosError = error as AxiosError<ErrorResponse>;
        if (axiosError.response?.data?.message) {
          setErrorMessage(axiosError.response.data.message);
        } else {
          console.error('회원가입 실패:', axiosError.response?.data);
          const serverError = error.response.data.result.message || '회원가입에 실패했습니다.';
          setErrorMessage(serverError);
          // setErrorMessage('회원가입에 실패했습니다.');
        }
      } else {
        console.error('회원가입 실패:', (error as Error).message);
        setErrorMessage((error as Error).message);
      }
    }
  };

  return (
    <div className="flex items-center justify-center h-[calc(100vh-63px)] bg-[#FAFBFC] px-6">
      <div className="w-full h-fit max-w-4xl">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">회원가입</h1>
        <h1 className='text-xl text-center text-gray-600 mb-20'>회원가입을 위해 아래의 정보를 입력해주세요</h1>
        {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}
        <form className="px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
          <div className="mb-10">
            <h1 className='text-lg font-bold text-left mb-3'>이름 / 기업명</h1>
            <input className="border rounded-lg w-full py-10 px-15 text-gray-700 focus:outline-none" id="name" type= "text" placeholder="이름 혹은 기업명을 입력해주세요" onChange={handleChange}/>
          </div>
          <div className="mb-10">
            <h1 className='text-lg font-bold text-left mb-3'>아이디</h1>
            <input className="border rounded-lg w-full py-10 px-15 text-gray-700 focus:outline-none" id="clientId" type= "text" placeholder="아이디를 입력해주세요" onChange={handleChange}/>
          </div>
          <div className="mb-10">
            <h1 className='text-lg font-bold text-left mb-3'>이메일</h1>
            <input className="border rounded-lg w-full py-10 px-15 text-gray-700 focus:outline-none" id="email" type= "email" placeholder="이메일 주소를 입력해주세요" onChange={handleChange}/>
          </div>
          <div className="mb-10 mx-auto relative">
            <h1 className='text-lg font-bold text-left mb-3'>비밀번호</h1>
            <input className="border rounded-lg w-full py-10 px-15 text-gray-700 focus:outline-none" id="password" type={showPwd ? "text" : 'password'} placeholder="비밀번호를 입력해주세요" onChange={handleChange}/>
            <button onClick = {pressShow} className='absolute bottom-15 right-15 text-gray-700'>
              {showPwd ? <FiEye /> : <FiEyeOff /> }
            </button>
          </div>
          <div className="mb-10 mx-auto relative">
            <h1 className='text-lg font-bold text-left mb-3'>비밀번호 확인</h1>
            <input className="border rounded-lg w-full py-10 px-15 text-gray-700 focus:outline-none" id="pwdcheck" type={showPwd ? "text" : 'password'} placeholder="비밀번호를 다시 입력해주세요" onChange={(e) => setPwdCheck(e.target.value)}/>
            <button onClick = {pressShow} className='absolute bottom-15 right-15 text-gray-700'>
              {showPwd ? <FiEye /> : <FiEyeOff /> }
            </button>
          </div>
          <div className="mb-20">
            <h1 className='text-lg font-bold text-left mb-3'>전화번호 (선택)</h1>
            <PhoneInput 
                country={'kr'}
                value={formData.phone}
                onChange={handlePhoneChange}
                dropdownStyle={{height:'80px'}}
                inputStyle = {{height:'40px', width: '100%'}}
              />
          </div>
          <button className="w-full bg-blue-500 hover:bg-blue-700 text-white py-8 rounded-lg focus:outline-none" type="submit">
              회원가입하기
            </button>
        </form>
      </div>
    </div>
  );
}
