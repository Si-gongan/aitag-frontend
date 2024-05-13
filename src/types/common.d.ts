import React, { MouseEvent } from 'react';

export type MainLayoutType = {
  children: ReactNode;
};

export interface TextFiledMenuType {
  text: string;
}

export interface TextFiledWhiteType {
  text: string;
  style?: string;
}

export interface TextFiledGrayType {
  text: string;
}

export interface ActionButtonType {
  text: string;
  size: string;
  type?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export interface ActionButtonSkyBlueType {
  text: string;
  size?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export interface AddKeywordsButtonType {
  previewImages: PreviewImageItemType[];
  setPreviewImages: React.Dispatch<React.SetStateAction<PreviewImageItemType[]>>;
  item: PreviewImageItemType;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export interface TextTitleFieldType {
  text: string;
}

export interface TextContentFieldType {
  text: string;
}
export interface TextIntroContentFieldType {
  text: string;
  style: string;
}
export interface TextSubTitleFieldType {
  text: string;
  style: string;
}

export interface InfoCardType {
  title: string;
}

export interface TableBodyItemType {
  urlAddress: string;
  delete: string;
}

export interface ImageTableBodyItemType {
  image: string | null;
  alt: string;
  language: string;
  keywords: JSX.Element;
  // keywords: React.ComponentType<ActionButtonWhiteProps>;
}

export interface PostIdTableItemType {
  image?: string;
  answer: string | undefined;
  [key: string]: string | undefined;
  id?: string;
}

export interface SelectedImageType {
  image: string;
  alt: string;
  language: 'Korean';
  keywords: string[];
}

export type CreateTableBodyItmeType = TableBodyItemType | ImageTableBodyItemType;

export interface TableHeaderType {
  text?: string;
  value?: string;
  image?: string;
}

export interface PreviewImageItemType {
  name: string;
  image: string; // 이미지 src
  alt: string;
  language: string;
  keywords: string[];
  size?: string;
  file?: File;
}

export interface PaginationType {
  start: number;
  click: number;
  total: number;
}

export interface PreviewInfoItemType {
  name: string;
  size: string; // 파일 크기
  type: string; // jpg, png 등
  previewUrl: string; // 미리보기 url
  file: File; // 이미지 원본 파일
}

export interface DashbaordSortType {
  id: string;
  name: string;
}

export interface WorkType {
  id: string;
  image: string;
  keywords: string[];
  language: string;
  answer?: string;
  before?: string;
  after?: string;
}

export interface PostType {
  createdAt: string;
  id: string;
  isComplete: false;
  target: string;
  title: string;
  updatedAt: string;
  writer: string;
  works: WorkType[];
  detail?: string;
}

export interface SupportTabType {
  id: string;
  text: string;
}

export interface SupportType {
  type: string;
  title: string;
  content: string;
  writer: string;
  createdAt: string;
}

export interface FaqItemType {
  index: number;
  title: string;
  writer: string;
  createdAt: string;
  [key: string]: string | number;
}

export interface PlansInfoType {
  title: string;
  credits: string;
  rate: string;
  period: string;
  recommend: boolean;
}

// 서버 요청 및 리스폰스 데이터 타입

// options
export interface OptionsType {
  method: string;
  headers?: {
    'Content-Type'?: string;
    authorization?: string;
  };
  // body?: string | FormData;
  body?: any;
}

// url 이미지 크롤링 요청
export interface ScrapImagesRequestType {
  url: string;
}

// url 이미지 크롤링 응답
export interface ScrapImagesResponseType {
  url: string | null;
  alt: string;
  width: number;
  height: number;
}

// GET_POST 요청시 params
export interface GetPostRequestParamType {
  // target: 'comment' | 'ai';
  target?: string;
  search: string;
  limit: string;
  page: string;
}

// GET_POST 응답
export interface GetPostResponseType {
  hasNextPage: boolean;
  hasPrevPage: boolean;
  limit: number;
  nextPage: null | number;
  page: number;
  pagingCounter: number;
  posts?: PostType[];
  inspects?: PostType[];
  prevPage: null | number;
  totalDocs: number;
  totalPages: number;
}

// GET_SUPPORT_FAQ 요청시 params
export interface GetSupportFaqParamType {
  type?: string;
  limit: string;
  page: string;
}

// GET_SUPPORT_FAQ 응답
export interface GetSupportFaqResponseType {
  faqs?: SupportType[];
  notices?: SupportType[];
  hasNextPage: boolean;
  hasPrevPage: boolean;
  limit: number;
  nextPage: null | number;
  page: number;
  pagingCounter: number;
  prevPage: null | number;
  totalDocs: number;
  totalPages: number;
}

export interface OpinionRequestType {
  clientId?: string;
  email: string;
  content: string;
  files: string[];
}

// GET_USER_INFO 응답
export interface GetUserInfoType {
  id: string;
  clientId: string;
  name: string;
  email: string;
  phone: string;
  rate: string;
  credit: number;
  profileImgUrl?: string;
  createdAt: string;
}
