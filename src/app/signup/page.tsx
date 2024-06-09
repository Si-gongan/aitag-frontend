// src/app/signup/page.tsx
'use client';
import { API_ROUTE, PATH } from '@/utils/routes';
import { ChangeEvent, FormEvent, MouseEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import { FiEyeOff, FiEye } from 'react-icons/fi';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import AlertDanger from '@/components/common/alert/AlertDanger';
import Checkbox from '@/components/common/input/Checkbox';
import ModalTerm from '@/components/common/modal/ModalTerm';

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
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [ageConfirmed, setAgeConfirmed] = useState(false);
  const [serviceTermsAccepted, setServiceTermsAccepted] = useState(false);
  const [personalInfoAccepted, setPersonalInfoAccepted] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handlePhoneChange = (phone:string) => {
    setFormData(prev => ({ ...prev, phone }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage(''); // Reset error message
    if (!formData.clientId || !formData.password || !formData.name || !formData.email) {
      setErrorMessage('모든 필수 필드를 채워주세요.');
      return;
    }
    if (formData.password !== pwdCheck) {
      setErrorMessage('비밀번호가 일치하지 않습니다.');
      return;
    }
    //비밀번호 조건 추후 추가
    if (formData.password.length < 8){
      setErrorMessage('비밀번호가 8자리 이상이 아닙니다.')
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

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.result?.message);
      }

      localStorage.setItem('token', data.result.token);
      alert('회원가입 성공!');
      router.push(PATH.LOGIN); // Redirect to login page
    } catch (error: unknown) {
      //checkID 및 checkEmail api 사용 불필요
      if(error instanceof Error ){
        console.error('회원가입 실패:', error.message);
        setErrorMessage(error.message);
      }else{
        console.error('알 수 없는 오류가 발생했습니다.', error);
        setErrorMessage('알 수 없는 오류가 발생했습니다.');
      } 
    }
  };

  const togglePasswordVisibility1 = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setShowPwd(!showPwd);
  };
  const togglePasswordVisibility2 = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setShowPwdCheck(!showPwdCheck);
  };
  const handleTermsChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target;
    setTermsAccepted(checked);
    setAgeConfirmed(checked);
    setServiceTermsAccepted(checked);
    setPersonalInfoAccepted(checked);
  };
  const handleAgeChange = (event: ChangeEvent<HTMLInputElement>) => {
    setAgeConfirmed(event.target.checked);
  };
  const handleServiceTermsChange = (event: ChangeEvent<HTMLInputElement>) => {
    setServiceTermsAccepted(event.target.checked);
  };
  const handlePersonalInfoChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPersonalInfoAccepted(event.target.checked);
  }
  const handleModalClose = () => {
    setShowModal(false);
  };
  const handleModalOpen = () => {
    setShowModal(true);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#FAFBFC] px-6 ">
      <div className="w-full h-3/5 max-w-4xl">
        <h1 className="text-32 font-bold text-center text-gray-800 mt-50 mb-10">회원가입</h1>
        <div className='mb-50'>
          <h1 className='text-16 text-center text-gray-600'>회원가입을 위해 아래의 정보를 입력해주세요</h1>
            {errorMessage !== '비밀번호가 일치하지 않습니다.' && (
              <AlertDanger message={errorMessage} />
            )}
        </div>
        <form className="px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
          <div className="mb-20">
            <h1 className='text-14 font-bold text-left mb-3'>이름 / 기업명 </h1>
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
            <div onClick={togglePasswordVisibility1} className='absolute bottom-15 right-15 text-gray-700'>
              {showPwd ? <FiEye /> : <FiEyeOff /> }
            </div>
          </div>
          <div className="mb-20 mx-auto relative">
            <h1 className='text-14 font-bold text-left mb-3'>비밀번호 확인</h1>
            <input className="border h-53 rounded-lg w-full py-10 px-15 text-gray-700 text-16 focus:outline-none" id="pwdcheck" type={showPwdCheck ? "text" : 'password'} placeholder="비밀번호를 다시 입력해주세요" onChange={(e) => setPwdCheck(e.target.value)}/>
            <div onClick={togglePasswordVisibility2} className='absolute bottom-15 right-15 text-gray-700'>
              {showPwdCheck ? <FiEye /> : <FiEyeOff /> }
            </div>
          </div>
          {errorMessage === '비밀번호가 일치하지 않습니다.' && (
              <AlertDanger message={errorMessage} />
          )}
          <div className="mb-36">
            <h1 className='text-l4 font-bold text-left mb-3'>전화번호 (선택)</h1>
            <PhoneInput 
                country={'kr'}
                value={formData.phone}
                onChange={handlePhoneChange}
                dropdownStyle={{height:'100px'}}
                inputStyle = {{height:'50px', width: '100%'}}
              />
          </div>
          <div className="flex items-center mb-16">
            <Checkbox value="allTerms" checked={termsAccepted} onChange={handleTermsChange} size={40} />
            <span className="ml-10 text-16 text-gray-700">전체 약관에 동의합니다</span>
          </div>
          <div className="flex items-center mb-16">
            <Checkbox value="ageTerm" checked={ageConfirmed} onChange={handleAgeChange} size={40} />
            <span className="ml-10 text-16 text-gray-700">만 14세 이상입니다</span>
          </div>
          <div className="flex items-center mb-16">
            <Checkbox value="service" checked={serviceTermsAccepted} onChange={handleServiceTermsChange} size={40} />
            <span className="ml-10 text-16 text-gray-700">(필수) 에이택 웹사이트 이용약관 <button type="button" className="text-blue-500 hover:underline ml-10" onClick={handleModalOpen}>보기</button></span>
          </div>
          <div className="flex items-center mb-16">
            <Checkbox value="personal" checked={personalInfoAccepted} onChange={handlePersonalInfoChange} size={40} />
            <span className="ml-10 text-16 text-gray-700">(필수) 에이택 웹사이트 개인정보 처리방침 <button type="button" className="text-blue-500 hover:underline ml-10" onClick={handleModalOpen}>보기</button></span>
          </div>
          <button className={`w-full h-53 text-16 py-8 rounded-lg focus:outline-none mb-50 ${termsAccepted && ageConfirmed && serviceTermsAccepted && personalInfoAccepted ? 'bg-[#4C80F1] hover:bg-blue-700 text-white' : 'bg-gray-400 text-gray-700 cursor-not-allowed'}`} type="submit" disabled={!termsAccepted || !ageConfirmed || !serviceTermsAccepted || !personalInfoAccepted}>
              가입하기
          </button>
        </form>
        {showModal && <ModalTerm onClose={handleModalClose} />}
      </div>
    </div>
  );
}
