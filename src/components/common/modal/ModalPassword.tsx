import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import ActionButtonGray from '../button/ActionButtonGray';
import ActionButton from '../button/ActionButton';
import ModalConfirm from '@/components/common/modal/ModalConfirmBlue';
import { API_ROUTE } from '@/utils/routes';


interface ModalPasswordProps {
  onClose: () => void;
}

interface ErrorState {
    currentPassword?: string;
    newPassword?: string;
    confirmPassword?: string;
}

const ModalPassword: React.FC<ModalPasswordProps> = ({ onClose }) => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState<ErrorState>({});
  const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false);

  const handleCurrentPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentPassword(event.target.value);
    if (error.currentPassword) {
        setError({ ...error, currentPassword: '' });
      }
  };

  const handleNewPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewPassword(event.target.value);
    if (error.currentPassword) {
        setError({ ...error, currentPassword: '' });
      }
  };

  const handleConfirmPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(event.target.value);
    if (error.currentPassword) {
        setError({ ...error, currentPassword: '' });
      }
  };

  const handleSubmit = async () => {
    setError({});

    if (newPassword !== confirmPassword) {
      setError({ ...error, confirmPassword: '비밀번호가 일치하지 않습니다' });
      return;
    }

    const token = localStorage.getItem('token');
    if (!token) {
      setError({ ...error, currentPassword: '토큰이 없습니다' });
      return;
    }

    try {
      const response = await fetch(API_ROUTE.CHANGE_PWD, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          currentPassword,
          newPassword
        })
      });

      if (!response.ok) {
        const data = await response.json();
        setError({ currentPassword: '비밀번호를 확인해주세요' });
      } else {
        setShowSuccessModal(true);
      }
    } catch (error) {
      setError({ currentPassword: '비밀번호 변경 실패' });
      console.error('비밀번호 변경 실패:', error);
    }
  };

  return createPortal(
    <div
      onClick={onClose}
      className="fixed inset-0 flex justify-center items-center h-full w-full bg-overlay z-overlay">
      <div
        onClick={(e) => e.stopPropagation()} //클릭으로 인한 닫힘 방지
        className="flex flex-col items-center pt-63 pb-63 gap-30 z-modal bg-[#FFFFFF] shadow-2xl rounded-4 w-700">
        <h2 className="text-22 font-bold text-center">비밀번호 변경하기</h2>
        <div className="flex flex-col gap-[20px] w-full px-75">
          <div className="relative justify-center items-center">
            <h4 className='text-[14px] text-[#878D91] mb-3'>현재 비밀번호</h4>
            <div className='relative'>
                <input
                    type="password"
                    placeholder={error.currentPassword || "입력해주세요"}
                    value={currentPassword}
                    onChange={handleCurrentPasswordChange}
                    className={`border h-54 rounded-lg w-full py-10 px-15 text-[#4D5256] text-14 focus:outline-none ${error.currentPassword ? 'border-red-500 placeholder-red-500' : ''}`}
                />
                {error.currentPassword && (
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <svg style={{ marginRight: '10px', width: '24px', height: '24px' }} viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="10" fill="none" stroke="#FF5D5D" strokeWidth="2"/>
                            <path d="M12 7v5m0 4h.01" stroke="#FF5D5D" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                    </div>
                )}
            </div>
          </div>
          <div className="relative">
            <h4 className='text-[14px] text-[#878D91] mb-3'>새 비밀번호</h4>
            <div className='relative'>
                <input
                    type="password"
                    placeholder={error.newPassword || "입력해주세요"}
                    value={newPassword}
                    onChange={handleNewPasswordChange}
                    className={`border h-54 rounded-lg w-full py-10 px-15 text-[#4D5256] text-14 focus:outline-none ${error.newPassword ? 'border-red-500 placeholder-red-500' : ''}`}
                />
                {error.newPassword && (
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <svg style={{ marginRight: '10px', width: '24px', height: '24px' }} viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="10" fill="none" stroke="#FF5D5D" strokeWidth="2"/>
                            <path d="M12 7v5m0 4h.01" stroke="#FF5D5D" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                    </div>
                )}
            </div>
          </div>
          <div className="relative">
            <h4 className='text-[14px] text-[#878D91] mb-3'>새 비밀번호 확인</h4>
            <div className='relative'>
                <input
                    type="password"
                    placeholder={error.confirmPassword || "입력해주세요"}
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                    className={`border h-54 rounded-lg w-full py-10 px-15 text-[#4D5256] text-14 focus:outline-none ${error.confirmPassword ? 'border-red-500 placeholder-red-500' : ''}`}
                />
                {error.confirmPassword && (
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <svg style={{ marginRight: '10px', width: '24px', height: '24px' }} viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="10" fill="none" stroke="#FF5D5D" strokeWidth="2"/>
                            <path d="M12 7v5m0 4h.01" stroke="#FF5D5D" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                    </div>
                )}
            </div>
          </div>
        </div>
        <div className="flex justify-between w-full px-75 mt-20">
          <ActionButtonGray text="취소" size="w-[233px] h-[54px] text-17" onClick={onClose} />
          <ActionButton text="확인" size="w-[233px] h-[54px] text-17" onClick={handleSubmit} />
        </div>
      </div>
      {showSuccessModal && (
        <ModalConfirm
          title="안내"
          description="변경되었습니다."
          buttonText="확인"
          onClose={() => {
            setShowSuccessModal(false);
            onClose();
          }}
        />
      )}
    </div>,
    document.body
  );
};

export default ModalPassword;
