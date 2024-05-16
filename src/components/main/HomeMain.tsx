import React from 'react';
import MainLayout from '../layout/MainLayout';
import TextFieldWhite from '../common/text/TextFieldWhite';
import ActionButtonBlack from '../common/button/ActionButtonBlack';
import IntroFirstCard from '../../../public/images/intro-first-card.svg';
import IntroSecondCard from '../../../public/images/intro-second-card.svg';
import IntroThirdCard from '../../../public/images/intro-third-card.svg';
import gongbangFirstCard from '../../../public/images/intro-gongbang-first-card.svg';
import gongbangSecondCard from '../../../public/images/intro-gongbang-second-card.svg';
import gongbangThirdCard from '../../../public/images/intro-gongbang-third-card.svg';
import SoultionFirst from '../../../public/images/solution-first.svg';
import SoultionSecond from '../../../public/images/solution-second.svg';
import Image from 'next/image';
import TextTitleField from '../common/text/TextTitleField';
import TextFieldContent from '../common/text/TextFieldContent';
import TextSubTitleField from '../common/text/TextSubTitleField';
import Link from 'next/link';
import { API_ROUTE, PATH } from '@/utils/routes';

const HomeMain = () => {
  return (
    <MainLayout>
      <div className="w-full">
        <div className="w-full relative h-[55rem] text-white">
          <div className="ml-130 mx-auto py-[15rem] text-left relative z-50">
            <div>
              <TextFieldWhite text={'웹사이트의'} style={'text-40 font-medium'} />
              <TextFieldWhite text={'새로운 경험을 쓰다'} style={'text-40 font-medium'} />
            </div>
            <div className="mt-40">
              <TextFieldWhite text={'글공방은 국내 유일한 대체 텍스트 제작 서비스입니다'} style={'text-14'} />
              <TextFieldWhite
                text={'대체텍스트를 통해 시각장애인도 경험 할 수 있는 디지털 환경을 만듭니다'}
                style={'text-14'}
              />
            </div>
            <div className="mt-40">
              <Link href={PATH.CREATE_URL}>
                <ActionButtonBlack text="시작하기" size="w-130 h-35" />
              </Link>
            </div>
          </div>
          <Image
            src="/images/landing_main.png"
            fill
            style={{ objectFit: 'cover' }}
            alt="노트북 측면과 노트북을 타이핑하고 있는 손 이미지"
          />
        </div>
        <div className="grid w-full h-600 bg-[#FFFFFF]">
          <div className="flex mx-auto items-center mt-50">
            <TextTitleField text={'대체텍스트 (Alternative Text) 란'} />
            <p className="text-35 font-bold grid items-end text-primary-500">,</p>
          </div>
          <div className="grid">
            <div className="mx-auto text-center">
              <TextFieldContent text={'웹사이트의 이미지를 시각장애인이 이해할 수 있도록 설명해주는 짧은 글입니다.'} />
              <TextFieldContent text={'시각적 콘텐츠의 의미를 모두에게 동일하게 전달합니다.'} />
            </div>
          </div>
          <div className="w-1000 flex justify-between mx-auto">
            <div>
              <Image src={IntroFirstCard} alt="컴퓨터 모형과 사진 이미지" />
            </div>
            <div>
              <Image src={IntroSecondCard} alt="컴퓨터 모형과 돋보기 이미지" />
            </div>
            <div>
              <Image src={IntroThirdCard} alt="문서와 소리 표시 이미지" />
            </div>
          </div>
        </div>
        <div className="grid w-full text-center h-700 mb-150">
          <div className="flex mt-100 mb-24 mx-auto">
            <TextTitleField text={'대체텍스트'} />
            <p className="text-32 font-bold grid items-end text-primary-500">,&nbsp;</p>
            <TextTitleField text={'이제는 신경써야 할 때'} />
          </div>
          <div className="grid mb-80">
            <div>
              <TextFieldContent
                text={'디지털 환경에서의 동등한 정보 접근을 보장하기 위해, 대체텍스트는 선택이 아닌 필수​입니다.'}
              />
            </div>
          </div>
          <div className="w-1000 flex justify-between mx-auto">
            <div>
              <Image src={gongbangFirstCard} alt="코딩화면 이미지" />
            </div>
            <div>
              <Image src={gongbangSecondCard} alt="빌딩 건물 이미지" />
            </div>
            <div>
              <Image src={gongbangThirdCard} alt="구글이 켜져 있는 노트북 이미지" />
            </div>
          </div>
        </div>
        <div className="grid w-full bg-[#FFFFFF]">
          <div className="flex mx-auto items-center mt-100">
            <TextTitleField text={'모두를 위한 정보 접근성'} />
            <p className="text-32 font-bold grid items-end text-primary-500">,</p>
          </div>
          <div className="grid items-center text-center mb-60">
            <TextTitleField text={'글공방으로 실천하세요'} />
          </div>
          <div className="w-1000 flex items-center justify-between mx-auto mb-60">
            <div>
              <TextSubTitleField text={'정확도 높은 글공방 AI'} style={'mb-20'} />
              <TextFieldContent text={'Image captioning, Visual Question Answering 등 '} />
              <TextFieldContent text={'다양한 평가에서 압도적 1위를 차지한 GPT - 4 이미지  '} />
              <TextFieldContent text={' 분석 모델을 활용해요. GPT - 4의 한국어 능력을 자체'} />
              <TextFieldContent text={'기술로 보완하여 정확한 대체텍스트를 생성합니다'} />
            </div>
            <div>
              <Image src="/images/icon01.png" width={300} height={300} alt="수첩과 돋보기 이미지" />
            </div>
          </div>
          <div className="w-1000 flex items-center justify-between mx-auto">
            <div>
              <Image src="/images/icon02.png" width={300} height={300} alt="블럭 이미지" />
            </div>
            <div className="text-right">
              <TextSubTitleField text={'자유로운 커스터마이징'} style={'mb-20'} />
              <TextFieldContent text={'대체텍스트 생성 시 키워드를 추가하여 정확도를 '} />
              <TextFieldContent text={'높일 수 있습니다. 언어와 말투를 직접 지정하여'} />
              <TextFieldContent text={'나만의 맞춤형 대체텍스트를 만나보세요.'} />
            </div>
          </div>
          <div className="w-1000 flex items-center justify-between mx-auto mb-50">
            <div>
              <TextSubTitleField text={'AI와 전문 해설진, '} style={''} />
              <TextSubTitleField text={'원하는 서비스를 한번에'} style={'mb-20'} />

              <TextFieldContent text={'비즈니스에 맞는 다양한 대체텍스트 생성 방법을  '} />
              <TextFieldContent text={'선택해보세요. 빠르고 간단한 글공방 AI와 꼼꼼한 '} />
              <TextFieldContent text={' 전문 해설진의 작성부터 검수까지, 내가 원하는 '} />
              <TextFieldContent text={'서비스를 만나볼 수 있어요.'} />
            </div>
            <div>
              <Image src="/images/icon03.png" width={300} height={300} alt="손 위에 AI 반도체 모형을 올려놓은 이미지" />
            </div>
          </div>
        </div>
        <div className="grid w-full text-center mt-100 mb-100">
          <div className="flex mb-50 mx-auto">
            <TextTitleField text={'효율적인 원클릭 솔루션'} />
            <p className="text-32 font-bold grid items-end text-primary-500">,&nbsp;</p>
            <TextTitleField text={'글공방'} />
          </div>
          <div className="w-1000 flex justify-between mx-auto">
            <div className="relative" style={{ borderRadius: '20px', overflow: 'hidden' }}>
              <Image src={SoultionFirst} alt="쌓여있는 동전과 아래로 향하는 화살표 이미지" />
              <div className="absolute top-20 z-10 text-left ml-30 mt-5">
                <TextFieldWhite text={'더 저렴하게'} style="font-bold text-16 mb-10" />
                <TextFieldWhite text={'해외의 유사 서비스 대비 60% 저렴한 '} style="text-16" />
                <TextFieldWhite text={'가격으로 부담없이 맞춤형 대체 택스트를 '} style="text-16" />
                <TextFieldWhite text={'만들어보세요.'} style="text-16" />
              </div>
            </div>
            <div className="relative" style={{ borderRadius: '20px', overflow: 'hidden' }}>
              <Image src={SoultionSecond} alt="시계 이미지" />
              <div className="absolute top-20 z-10 text-left ml-30 mt-5">
                <TextFieldWhite text={'더 간편하게'} style="font-bold text-16 mb-10" />
                <TextFieldWhite text={'웹사이트의 주소나 이미지 파일을 첨부하기만'} style="text-16" />
                <TextFieldWhite text={'하면 클릭 한 번으로 대체텍스트를 생성할 수 '} style="text-16" />
                <TextFieldWhite text={'있어요. 더욱 빠른 글공방 AI를 만나보세요.'} style="text-16" />
              </div>
            </div>
          </div>
        </div>
        <div className="grid w-full text-center bg-[#FFFFFF]">
          <div className="flex mt-100 mb-15 mx-auto">
            <TextTitleField text={'글공방과 함께한 기업들'} />
          </div>
          <div className="grid mb-50">
            <div>
              <TextFieldContent text={'정보 접근성의 도약, 글공방이 함께합니다'} />
            </div>
          </div>
          <div className="w-1000 flex justify-center mx-auto mb-100">
            <div>
              <Image src="/images/company.png" width={1000} height={300} alt="글공방 참여 기업 로고" />
            </div>
          </div>
        </div>
        <div className="w-full relative">
          <div className="w-full h-[40rem]">
            <div className="mx-auto py-[8rem] text-center relative z-50">
              <div>
                <TextFieldWhite text={'지금 무료로 시작하세요!'} style={'text-40 font-medium'} />
              </div>
              <div className="mt-15">
                <TextFieldWhite text={'다양한 기능을 체험해보고,'} style={'text-20 font-medium text-[#F8FAFB]'} />
                <TextFieldWhite
                  text={'모두를 위한 정보접근성을 실천하세요.'}
                  style={'text-20 font-medium text-[#F8FAFB]'}
                />
              </div>
              <div className="mt-20">
                <Link href={PATH.LOGIN}>
                  <ActionButtonBlack text="시작하기" size="w-129 h-47 rounded-lg" />
                </Link>
              </div>
              <div className="mt-20">
                <TextFieldWhite
                  text={'본 홈페이지에는 글공방이 작성한 대체텍스트가 포함되어 있습니다.'}
                  style={'text-16 font-Noto Sans KR'}
                />
              </div>
            </div>
            <Image src="/images/laptop.png" fill style={{ objectFit: 'cover' }} alt="노트북 이미지" />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default HomeMain;
