import { OptionsType } from '@/types/common';
import { getToken } from '@/utils/getToken';

export const fetchWithInterceptor = async (url: string, options: OptionsType) => {
  const accessToken = await getToken();
  if (accessToken) {
    if (!options.headers) {
      options.headers = {};
    }
    options.headers.authorization = `Bearer ${accessToken}`;
  }

  if (!options.headers || !options.headers['Content-Type']) {
    options.headers = {
      ...options.headers,
      'Content-Type': 'application/json',
    };
  }

  return fetch(url, options);
};
