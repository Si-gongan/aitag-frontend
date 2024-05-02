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
  // language: '한국어' | '영어' | '한국어 & 영어';
  language: string;
  keywords: JSX.Element;
  // keywords: React.ComponentType<ActionButtonWhiteProps>;
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
  urlName: string;
  image: string;
  alt: string;
  language: string;
  keywords: string[];
}

export interface PaginationType {
  start: number;
  click: number;
  total: number;
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
