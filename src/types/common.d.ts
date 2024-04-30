import { MouseEvent } from 'react';

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
}

export interface ActionButtonSkyBlueType {
  text: string;
  size: string;
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
