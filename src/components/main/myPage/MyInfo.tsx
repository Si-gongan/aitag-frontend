'use client'

import { useRouter } from 'next/navigation';
import React, { ChangeEvent, useEffect, useState } from 'react';
import ActionButtonMyPage from '@/components/common/button/ActionButtonMyPage';
import Link from 'next/link';
import { PATH } from '@/utils/routes';

interface User {
  name: string;
  email: string;
  phone?: string;
  clientId: string;
  profileImgUrl?: string; // 프로필 이미지 URL 추가
}

export default function MyInfo() {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const name = localStorage.getItem('name') as string;
    if (!token) {
      router.replace('/login'); // 뒤로 돌아가기 불가능
    }
    setUser(JSON.parse(name));
  }, []);

  useEffect(() => {
    const token = localStorage.getItem('token') as string;
    const userInfo = localStorage.getItem('userInfo');
    if (userInfo) {
      setUser(JSON.parse(userInfo));
    } else {
      fetchUserInfo(token);
    }
  }, [router]);

  const fetchUserInfo = async (token: string) => {
    try {
      const response = await fetch('https://gongbang.sigongan-ai.shop/user/info', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem('userInfo', JSON.stringify(data.result.user));
        setUser(data.result.user as User);
        if (data.result.user.profileImgUrl) {
          setPreviewUrl(data.result.user.profileImgUrl);
        }
      } else {
        throw new Error(data.message || '사용자 정보를 불러오는데 실패했습니다.');
      }
    } catch (error) {
      console.error('Error fetching user info:', (error as Error).message);
      setUser(null);
    }
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.result) {
          setPreviewUrl(reader.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageDelete = () => {
    setSelectedImage(null);
    setPreviewUrl(null);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
        const formData = new FormData();
        if (previewUrl !== null) {
          formData.append('profileImgUrl', previewUrl);
        }
        const token = localStorage.getItem('token') || '';
      const response = await fetch('https://gongbang.sigongan-ai.shop/user/change/info', {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
        body: formData,
      });
      if (response.ok) {
        console.log('프로필 이미지 업로드 성공');
        // 사용자 정보 다시 불러오기
        fetchUserInfo(token);
        console.log(token);
        console.log(user?.profileImgUrl);
        console.log(previewUrl);
      } else {
        throw new Error('프로필 이미지 업로드에 실패했습니다.');
      }
    } catch (error) {
      console.error('프로필 이미지 업로드 에러:', error);
    }
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex w-full h-full bg-[#FAFBFC]">
      <div className='flex w-full mt-30 mb-30'>
        <div className='relative flex flex-col items-center w-[262px] h-[878px] bg-[#FFFFFF] mr-30'>
          <ActionButtonMyPage href={PATH.MY_PAGE} text="개인정보 수정" size="w-[200px] h-[54px] mt-[64px] " />
          <ActionButtonMyPage href={PATH.My_PAGE_PAY} text="결제정보" size="w-[200px] h-[54px] mt-[32px] " />
        </div>
        <div className='w-[1136px] justify-center h-[878px] bg-[#FFFFFF]'>
          <div className='mt-[41px] w-[996px]'>
            <div className='w-full justify-center font-bold ml-[70px]'>
              <h2 className='text-[36px] text-[#4D5256]'>마이페이지</h2>
              {user && (
                <div className="mt-[10px] mb-[20px]">
                  <p className='text-14'>안녕하세요, {user.name} 님의 My page입니다</p>
                </div>
              )}
              <div className="border-t border-[#919191]"></div>
            </div>
            <div className='flex justify-between w-[948px] h-[382px] mt-[80px] ml-[70px]'>
              <div className='w-[248px] h-[314px] mt-[20px]'>
                <form onSubmit={handleSubmit} className="text-center">
                  <div className="image-container mb-4">
                    {previewUrl ? (
                      <img src={previewUrl} alt="프로필 이미지" className="w-[200px] h-[200px] border-[#2C5AE9] border-[1px] rounded-full mx-auto" />
                    ) : (
                      <div className="w-[200px] h-[200px] border-[#2C5AE9] border-[1px] bg-[#F8FAFB] rounded-full flex justify-center items-center mx-auto">
                        <span className="text-gray-500">프로필 이미지를 선택하세요</span>
                      </div>
                    )}
                  </div>
                  <div className='flex justify-between items-center'>
                    <label htmlFor='upload' className='flex justify-center items-center w-[120px] h-[54px] mt-[64px] hover:bg-[#F2F6FE] hover:border-[#4C80F1] hover:text-[#2C5AE9] bg-[#F8FAFB] border-[#CED3D6] border-[1px] rounded-[0.25rem] text-[#4D5256]'>
                      이미지 업로드
                      <input
                        id="upload"
                        type="file"
                        accept=".jpg, .jpeg, .img, .png"
                        onChange={handleImageChange}
                        className="hidden"
                      />
                    </label>
                      <button onClick={handleImageDelete} className="w-[120px] h-[54px] mt-[64px] hover:bg-[#F2F6FE] hover:border-[#4C80F1] hover:text-[#2C5AE9] bg-[#F8FAFB] border-[#CED3D6] border-[1px] rounded-[0.25rem] text-[#4D5256]">
                        이미지 삭제
                      </button>
                  </div>
                  <button type="submit" className="w-[120px] h-[54px] mt-[64px] hover:bg-[#F2F6FE] hover:border-[#4C80F1] hover:text-[#2C5AE9] bg-[#F8FAFB] border-[#CED3D6] border-[1px] rounded-[0.25rem] text-[#4D5256]">
                    저장하기
                  </button>
                </form>
              </div>
              <div className='relative w-[600px] h-[382px]'>
                <div className="flex justify-between items-center mb-[28px]">
                    <h1 className='w-[100px] text-14 text-left'>이름 / 기업명</h1>
                    <div className="w-[500px] border h-53 rounded-lg w-full py-10 px-15 text-gray-700 text-16 text-[#4D5256] focus:outline-none">{user?.name} </div>
                </div>
                <div className="flex justify-between items-center mb-[28px]">
                    <h1 className='w-[100px] text-14 text-left'>이메일</h1>
                    <div className="w-[500px] border h-53 rounded-lg w-full py-10 px-15 text-gray-700 text-16 text-[#4D5256] focus:outline-none">{user?.email} </div>
                </div>
                <div className="flex justify-between items-center mb-[28px]">
                    <h1 className='w-[100px] text-14 text-left'>전화번호</h1>
                    <div className="w-[500px] border h-53 rounded-lg w-full py-10 px-15 text-gray-700 text-16 text-[#4D5256] focus:outline-none">{user?.phone} </div>
                </div>
                <div className="flex justify-between items-center mb-[28px]">
                    <h1 className='w-[100px] text-14 text-left'>아이디</h1>
                    <div className="w-[500px] border h-53 rounded-lg w-full py-10 px-15 text-gray-700 text-16 text-[#4D5256] focus:outline-none">{user?.clientId} </div>
                </div>
                <div className="flex justify-between items-center mb-[28px]">
                    <h1 className='w-[100px] text-14 text-left'>비밀번호</h1>
                    <button className="text-left w-[500px] border h-53 rounded-lg w-full py-10 px-15 text-gray-700 text-16 text-[#4D5256] focus:outline-none bg-[#F8FAFB]">비밀번호 변경하기</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}