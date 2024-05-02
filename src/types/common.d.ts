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

//signup
export interface UserType {
  clientId: string; // 2자 이상
	password: string;
	name: string;
	email: string;
	phone: string;
}

//signup 응답
export interface SignupResponseType {
  statusCode: number;
  result: {
    user: UserType;
    token: string;
  };
}