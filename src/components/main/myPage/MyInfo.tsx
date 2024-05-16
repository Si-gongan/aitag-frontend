'use client'

import { useRouter } from 'next/navigation';
import React, { ChangeEvent, useEffect, useState } from 'react';
import ActionButtonMyPage from '@/components/common/button/ActionButtonMyPage';
import { API_ROUTE, PATH } from '@/utils/routes';
import ModalConfirm from '@/components/common/modal/ModalConfirmBlue';
import ModalPassword from '@/components/common/modal/ModalPassword';

interface User {
    name: string;
    email: string;
    phone?: string;
    clientId: string;
    profileImgUrl?: string;
}

export default function MyInfo() {

    const [user, setUser] = useState<User>({
        name: '',
        email: '',
        phone: '',
        clientId: '',
        profileImgUrl: ''
    });

    const [token, setToken] = useState<string | null>(null);
    const [newImage, setNewImage] = useState<File | null>(null);
    const [showModal, setShowModal] = useState<boolean>(false);
    const [showPasswordModal, setShowPasswordModal] = useState<boolean>(false);
    

    useEffect(() => {
        const token = localStorage.getItem('token');
        setToken(token);
      }, []);

    useEffect(() => {
        const fetchUserInfo = async () => {
          if (!token) {
            console.error('토큰 없음');
            return;
          }

          console.log('Token:', token);
          
          try {
            const response = await fetch(API_ROUTE.GET_USER_INFO, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${token}`
              }
            });
    
            if (!response.ok) {
              throw new Error('유저 정보 없음');
            }
    
            const data = await response.json();
            const fetchedUser: User = data.result.user;
            setUser(fetchedUser);
          } catch (error) {
            console.error('유저 정보 없음:', error);
          }
        };
    
        if (token) {
            fetchUserInfo();
        }
    }, [token]);

    const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            setNewImage(file);
            const formData = new FormData();
            formData.append('file', file);
        
            if (!token) {
                console.error('토큰 없음');
                return;
            }
        
            try {
                const response = await fetch(API_ROUTE.UPLOAD, {
                method: 'POST',
                headers: {
                    'authorization': `Bearer ${token}`
                },
                body: formData
                });
        
                if (!response.ok) {
                throw new Error('이미지 업로드 실패');
                }
        
                const data = await response.json();
                setUser(prevUser => ({ ...prevUser, profileImgUrl: data.result.fileUrl }));
            } catch (error) {
                console.error('이미지 업로드 실패:', error);
            }
        }
    };

    const handleSaveProfile = async () => {
        if (!token) {
          console.error('토큰 없음');
          return;
        }
    
        try {
            const response = await fetch(API_ROUTE.CHANGE_INFO, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    profileImgUrl: user.profileImgUrl || ''
                })
            });
        
            if (!response.ok) {
                throw new Error('프로필 저장 실패');
            }
            console.log(user.profileImgUrl)
            setShowModal(true); 
        } catch (error) {
            console.error('프로필 저장 실패:', error);
        }
    };

    const handleDeleteImage = async () => {
        if (!token) {
          console.error('토큰 없음');
          return;
        }
      
        try {
            // 이미지 삭제 API 호출
            const response = await fetch(API_ROUTE.DELETE_IMG, {
              method: 'DELETE',
              headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${token}`
              }
            });
        
            if (!response.ok) {
              throw new Error('이미지 삭제 실패');
            }
        
            const data = await response.json();
            const updatedUser: User = data.result.user;
            setUser(updatedUser); // 업데이트된 사용자 정보 설정
            //모달 컨펌 삽입
        } catch (error) {
            console.error('Error deleting image:', error);
        }
    };
      

  return (
    <div className="flex w-full h-full bg-[#FAFBFC]">
        <div className='flex w-full mt-30 mb-30'>
            <div className='relative flex flex-col items-center w-[262px] h-[878px] bg-[#FFFFFF] mr-30'>
               <ActionButtonMyPage href={PATH.MYPAGE} text="개인정보 수정" size="w-[200px] h-[54px] mt-[64px] " />
               <ActionButtonMyPage href={PATH.MYPAGE_PAYMENT} text="결제정보" size="w-[200px] h-[54px] mt-[32px] " />
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
                            <div className="image-container mb-4">
                                {user.profileImgUrl ? (
                                    <img src={user.profileImgUrl} alt="프로필 이미지" style={{ width: '200px', height: '200px',}} className="border-[#2C5AE9] border-[1px] rounded-full mx-auto" />
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
                                        onChange={handleImageUpload}
                                        className="hidden"
                                    />
                                </label>
                                <button onClick={handleDeleteImage} className="w-[120px] h-[54px] mt-[64px] hover:bg-[#F2F6FE] hover:border-[#4C80F1] hover:text-[#2C5AE9] bg-[#F8FAFB] border-[#CED3D6] border-[1px] rounded-[0.25rem] text-[#4D5256]">
                                    이미지 삭제
                                </button>
                            </div>
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
                                <button onClick={() => setShowPasswordModal(true)} className="text-left w-[500px] border h-53 rounded-lg w-full py-10 px-15 text-gray-700 text-16 text-[#4D5256] focus:outline-none bg-[#F8FAFB]">비밀번호 변경하기</button>
                            </div>
                       </div>
                    </div>
                    <div>
                        <button onClick={handleSaveProfile} className="w-[233px] h-[70px] mt-[130px] ml-[785px] bg-[#4C80F1] rounded-[0.25rem] text-17 text-[#FFFFFF]" style = {{ boxShadow: '0px 1px 2px 0px #4C80F180' }}>저장하기</button>
                    </div>
                    {showModal && (
                        <ModalConfirm
                        title="안내"
                        description="변경되었습니다."
                        buttonText="확인"
                        onClose={() => setShowModal(false)}
                        />
                    )}
                    {showPasswordModal && (
                        <ModalPassword
                            onClose={() => setShowPasswordModal(false)}
                        />
                    )}
                </div>
            </div>
        </div>
    </div>
  )
}
