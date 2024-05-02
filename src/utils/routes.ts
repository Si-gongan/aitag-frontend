export const HEADER_MENU = [
  { title: '워크스페이스', path: '/dashboard' },
  { title: '요금제', path: '/plan' },
  { title: '고객센터', path: '/support' },
];

export const BASE_URL = 'https://gongbang.sigongan-ai.shop';

export const API_ROUTE = {
  UPLOAD: `${BASE_URL}/upload`,
  SCRAP_IMAGES: (url: string) => `${BASE_URL}/scrap/images?url=${url}`,
  POST: `${BASE_URL}/post`,
};
