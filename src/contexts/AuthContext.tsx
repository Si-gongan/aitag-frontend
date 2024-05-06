'use client';
import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';

// 사용자 정보를 위한 인터페이스
interface User {
  name: string;
  // 다른 사용자 속성
}

// AuthContext가 사용할 값들에 대한 인터페이스
interface AuthContextType {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  logout: () => void;
}

// 기본값 설정
const defaultContextValue: AuthContextType = {
  user: null,
  setUser: () => {},
  logout: () => {},
};

const AuthContext = createContext<AuthContextType>(defaultContextValue);

export const useAuth = () => useContext(AuthContext);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);

  const fetchUserInfo = useCallback(async () => {
    const token = localStorage.getItem('token');
    if (token) {
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
          setUser(data.result.user);
        } else {
          localStorage.removeItem('token'); // 토큰이 유효하지 않으면 제거
          setUser(null);
        }
      } catch (error) {
        console.error('Error fetching user info:', error);
        setUser(null);
      }
    }
  }, []);

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userInfo');
    setUser(null);
  };

  useEffect(() => {
    fetchUserInfo();
  }, [fetchUserInfo]);

  return (
    <AuthContext.Provider value={{ user, setUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;