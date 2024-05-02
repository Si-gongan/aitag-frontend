import Link from 'next/link';
'use client';
import { useRouter } from 'next/navigation';
import { ChangeEvent, FormEvent, MouseEvent, useState } from 'react';
import { FiEyeOff, FiEye } from 'react-icons/fi'

export default function Login() {

  const[showPwd, setShowPwd] = useState(false)
  const pressShow = (e: MouseEvent) => {
    e.preventDefault();
    setShowPwd(!showPwd)
  }

  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  const [loginData, setLoginData] = useState({
    clientId: '',
    password: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setLoginData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('https://gongbang.sigongan-ai.shop/user/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          clientId: loginData.clientId,
          password: loginData.password
        })
      });

      if (!response.ok) {
        throw new Error('로그인 실패');
      }

      const result = await response.json();
      localStorage.setItem('token', result.result.token); // 토큰 저장
      router.push('/dashboard'); // 성공 시 대시보드로 리디렉션
      alert('로그인 성공!');
    } catch (error) {
      console.error('로그인 실패:', error);
      setErrorMessage('로그인 정보가 정확하지 않습니다.');
    }
  };

  return (
    <div className="flex items-center justify-center h-[calc(100vh-63px)] bg-gray-50 px-6">
      <div className="w-full h-3/5 max-w-4xl">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-15">로그인</h1>
        <h1 className='text-xl text-center text-gray-600 mb-40'>맞춤형 대체텍스트 제작소, 글공방에 오신 것을 환영합니다!</h1>
        <form className="px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
          <div className="mb-10">
            <input className="border rounded-lg w-full py-10 px-15 text-gray-700 focus:outline-none" id="clientId" type= "text" placeholder="ID" value={loginData.clientId} onChange={handleChange} />
          </div>
          <div className="mb-15 mx-auto relative">
            <input className="border rounded-lg w-full py-10 px-15 text-gray-700 focus:outline-none" id="password" type={showPwd ? "text" : 'password'} placeholder="PW" value={loginData.password} onChange={handleChange}/>
            <button onClick = {e=>pressShow(e)} className='absolute bottom-15 right-15 text-gray-700'>
              {showPwd ? <FiEye /> : <FiEyeOff /> }
            </button>
          </div>
          <div className="flex items-center justify-end mb-15">
            <a className="inline-block align-baseline text-xl text-blue-500 hover:text-blue-800" href="#">
              아이디 찾기
            </a>
            <h1 className="px-20 text-xl text-blue-500">|</h1>
            <a className="inline-block align-baseline text-xl text-blue-500 hover:text-blue-800" href="#">
              비밀번호 찾기
            </a>
          </div>
          <button className="w-full bg-blue-500 hover:bg-blue-700 text-white py-8 rounded-lg focus:outline-none" type="submit">
              로그인
            </button>
          <div className="text-center mt-15">
            <a className="inline-block align-baseline text-xl text-blue-500 hover:text-blue-800" href="/signup">
              아직 계정이 없으신가요?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
