import { GetPostRequestParamType } from '@/types/common';

export const PATH = {
  HOME: '/',
  LOGIN: '/login',
  SIGNUP: '/signup',
  FIND_CLIENT:'/find/client-id',
  FIND_PWD:'/find/password',
  CHANGE_FIND_PWD:'/change/findPassword',
  DASHBOARD: '/dashboard',
  CREATE_URL: '/create/url',
  CREATE_IMAGE: '/create/image',
  MY_PAGE:'/mypage/info',
  My_PAGE_PAY:'mypage/payment'
};

export const HEADER_MENU = [
  { title: '워크스페이스', path: '/dashboard' },
  { title: '요금제', path: '/plan' },
  { title: '고객센터', path: '/support' },
];

export const API_ROUTE = {
  UPLOAD: `${process.env.NEXT_PUBLIC_API_BASE_URL}/upload`,
  SCRAP_IMAGES: (url: string) => `${process.env.NEXT_PUBLIC_API_BASE_URL}/scrap/images?url=${url}`,
  POST: `${process.env.NEXT_PUBLIC_API_BASE_URL}/post`,
  GET_POST: ({ target, search, limit, page }: GetPostRequestParamType) =>
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/post?target=${target}&search=${search}&limit=${limit}&page=${page}`,
  GET_POST_DETAIL: (postId: string) => `${process.env.NEXT_PUBLIC_API_BASE_URL}/post/detail/${postId}`,
  INSPECT: `${process.env.NEXT_PUBLIC_API_BASE_URL}/inspect`,
  GET_INSPECT: ({ search, limit, page }: GetPostRequestParamType) =>
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/inspect?search=${search}&limit=${limit}&page=${page}`,
  GET_INSPECT_DETAIL: (inspectId: string) => `${process.env.NEXT_PUBLIC_API_BASE_URL}/inspect/detail/${inspectId}`,
  LOGIN: `${process.env.NEXT_PUBLIC_API_BASE_URL}/user/signin`,
  SIGN_UP: `${process.env.NEXT_PUBLIC_API_BASE_URL}/user/signup`,
  GET_CLIENT_ID: (clientId: string) => 
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/user/check/client-id/${clientId}`,
  GET_EMAIL: (email: string) => 
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/user/check/email/${email}`,
  GET_USER_INFO: `${process.env.NEXT_PUBLIC_API_BASE_URL}/user/info`,
  FIND_ID: `${process.env.NEXT_PUBLIC_API_BASE_URL}/user/find/client-id`,
  FIND_PWD: `${process.env.NEXT_PUBLIC_API_BASE_URL}/user/find/password`,
  CHANGE_PWD: `${process.env.NEXT_PUBLIC_API_BASE_URL}/user/change/password`,
  CHANGE_INFO: `${process.env.NEXT_PUBLIC_API_BASE_URL}/user/change/info`,
  DELETE_IMG: `${process.env.NEXT_PUBLIC_API_BASE_URL}/user/img`,
};
