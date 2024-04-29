import { getToken } from '@/utils/getToken';
import axios from 'axios';

const BASE_URL = 'https://gongbang.sigongan-ai.shop';

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use(async (config) => {
  if (typeof window !== 'undefined') {
    try {
      const accessToken = await getToken();
      if (accessToken) config.headers.Authorization = `Bearer ${accessToken}`;
    } catch (error) {
      console.error(
        'interceptors에서 accessToken을 가져오는 데 실패했어요!',
        error
      );
    }
  }

  return config;
});

export default instance;
