import { GetPostRequestParamType } from '@/types/common';

export const PATH = {
  HOME: '/',
  DASHBOARD: '/dashboard',
  CREATE_URL: '/create/url',
  CREATE_IMAGE: '/create/image',
};

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
  GET_POST: ({ target, search, limit, page }: GetPostRequestParamType) =>
    `${BASE_URL}/post?target=${target}&search=${search}&limit=${limit}&page=${page}`,
  GET_POST_DETAIL: (postId: string) => `${BASE_URL}/post/detail/${postId}`,
  INSPECT: `${BASE_URL}/inspect`,
  GET_INSPECT: ({ search, limit, page }: GetPostRequestParamType) =>
    `${BASE_URL}/inspect?search=${search}&limit=${limit}&page=${page}`,
  GET_INSPECT_DETAIL: (inspectId: string) => `${BASE_URL}/inspect/detail/${inspectId}`,
};
