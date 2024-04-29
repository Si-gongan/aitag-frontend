import React from 'react';
import MainLayout from '../layout/MainLayout';

import ActionButton from '../common/button/ActionButton';
import TextFieldWhite from '../common/text/TextFieldWhite';
import ActionButtonBlack from '../common/button/ActionButtonBlack';
import IntroFirstCard from '../../assets/intro-first-card.svg';
import IntroSecondCard from '../../assets/intro-second-card.svg';
import IntroThirdCard from '../../assets/intro-third-card.svg';
import gongbangFirstCard from '../../assets/intro-gongbang-first-card.svg';
import gongbangSecondCard from '../../assets/intro-gongbang-second-card.svg';
import gongbangThirdCard from '../../assets/intro-gongbang-third-card.svg';
import FolderFirst from '../../assets/folder-first.svg';
import FolderSecond from '../../assets/folder-second.svg';
import FolderThird from '../../assets/folder-third.svg';
import SoultionFirst from '../../assets/solution-first.svg';
import SoultionSecond from '../../assets/solution-second.svg';
import IntroCompany from '../../assets/intro-company.svg';
import Image from 'next/image';
import TextTitleField from '../common/text/TextTitleField';
import TextFieldContent from '../common/text/TextFieldContent';

const HomeMain = () => {
  return (
    <MainLayout>
      <div className="w-full">
        {/* <div className="grid w-full h-[60rem] mb-[6rem]"> */}
        <div className="grid w-full h-630 mb-60">
          <div className="w-full relative">
            <div className="gongbang-image w-full h-[32rem]">
              <div className="mx-auto py-[8rem] text-center">
                <div>
                  <h1 className="text-40 font-bold text-primary-100">테스트</h1>
                  <TextFieldWhite
                    text={'글 공방'}
                    // style={'text-[3.125rem] font-bold'}
                    style={'text-40 font-bold'}
                  />
                  <TextFieldWhite text={'웹사이트의 새로운 경험을 쓰다'} style={'text-[3.125rem] font-bold'} />
                </div>
                <div className="mt-4">
                  <TextFieldWhite
                    text={'글공방은 국내 유일한 대체 텍스트 제작 서비스입니다'}
                    style={'text-[1rem] font-light '}
                  />
                  <TextFieldWhite
                    text={'대체텍스트를 통해 시각장애인도 경헐 할 수 있는 디지털 환경을 만듭니다'}
                    style={'text-[1rem] font-light '}
                  />
                </div>
                <div className="mt-7">
                  <ActionButtonBlack text="시작하기" size="w-[6.1rem] h-[2.81rem]" />
                </div>
              </div>
            </div>
          </div>
          <div className="grid w-full">
            <div className="flex mx-auto  items-center mt-14 mb-5">
              <TextTitleField text={'대체텍스트 (Alternative Text) 란'} />
              <p className="text-[1.50rem] font-bold grid items-end text-primary-500">,</p>
            </div>
            <div className="grid mb-10">
              <div className="mx-auto text-center">
                <TextFieldContent
                  text={'웹사이트의 이미지를 시각장애인이 이해할 수 있도록 설명해주는 짧은 글입니다.'}
                />
                <TextFieldContent text={'시각적 콘텐츠의 의미를 모두에게 동일하게 전달합니다.'} />
              </div>
            </div>
            <div className="w-[67%] flex justify-between mx-auto">
              <div>
                <Image src={IntroFirstCard} alt="글공방 소개" />
              </div>
              <div>
                <Image src={IntroSecondCard} alt="글공방 소개" />
              </div>
              <div>
                <Image src={IntroThirdCard} alt="글공방 소개" />
              </div>
            </div>
          </div>
          {/* <div className="grid">
            <div>
              <TextFieldContent
                text={'글공방은 국내 유일한 대체텍스트 제작 서비스입니다.'}
              />
              <TextFieldContent
                text={
                  '대체텍스트를 통해 시각장애인도 경험할 수 있는 디지털 환경을 만듭니다.'
                }
              />
            </div>
            <ActionButton text="시작하기" size="w-[14.7rem] py-[0.493rem]" />
          </div> */}
        </div>
        <div className="grid w-full text-center bg-[#F6F7F9]">
          <div className="flex mt-[6rem] mb-5 mx-auto">
            <TextTitleField text={'대체텍스트'} />
            <p className="text-[1.50rem] font-bold grid items-end text-primary-500">,</p>
            <TextTitleField text={'이제는 신경써야할 때'} />
          </div>
          <div className="grid mb-[4rem]">
            <div>
              <TextFieldContent
                text={'디지털 환경에서의 동등한 정보 접근을 보장하기 위해, 대체텍스트는 선택이 아닌 필수​입니다.'}
              />
            </div>
          </div>
          <div className="w-[67%] flex justify-between mx-auto mb-[5rem]">
            <div>
              <Image src={gongbangFirstCard} alt="글공방 소개" />
            </div>
            <div>
              <Image src={gongbangSecondCard} alt="글공방 소개" />
            </div>
            <div>
              <Image src={gongbangThirdCard} alt="글공방 소개" />
            </div>
          </div>
        </div>
        <div className="grid w-full">
          <div className="flex mx-auto  items-center mt-14 mb-1">
            <TextTitleField text={'모두를 위한 정보 접근성'} />
            <p className="text-[1.50rem] font-bold grid items-end text-primary-500">,</p>
          </div>
          <div className="grid mb-10 items-center text-center">
            <TextTitleField text={'글공방으로 실천하세요'} />
          </div>
          <div className="w-[60%] flex items-center justify-between mx-auto">
            <div>
              <TextTitleField text={'정확도 높은 글공방 AI'} />
              <TextFieldContent text={'Image captioning, Visual Question Answering 등 '} />
              <TextFieldContent text={'다양한 평가에서 압도적 1위를 차지한 GPT - 4 이미지  '} />
              <TextFieldContent text={' 분석 모델을 활용해요. GPT - 4의 한국어 능력을 자체'} />
              <TextFieldContent text={'기술로 보완하여 정확한 대체텍스트를 생성합니다'} />
            </div>
            <div>
              <Image src={FolderFirst} alt="글공방 AI" />
            </div>
          </div>
          <div className="w-[60%] flex items-center justify-between mx-auto">
            <div>
              <Image src={FolderSecond} alt="글공방 AI" />
            </div>
            <div>
              <TextTitleField text={'자유로운 커스터마이징'} />
              <TextFieldContent text={'대체텍스트 생성 시 키워드를 추가하여 정확도를 '} />
              <TextFieldContent text={'높일 수 있습니다. 언어와 말투를 직접 지정하여'} />
              <TextFieldContent text={'나만의 맞춤형 대체텍스트를 만나보세요.'} />
            </div>
          </div>
          <div className="w-[60%] flex items-center justify-between mx-auto">
            <div>
              <TextTitleField text={'AI와 전문 해설진, '} />
              <TextTitleField text={'원하는 서비스를 한번에'} />

              <TextFieldContent text={'비즈니스에 맞는 다양한 대체텍스트 생성 방법을  '} />
              <TextFieldContent text={'선택해보세요. 빠르고 간단한 글공방 AI와 꼼꼼한 '} />
              <TextFieldContent text={' 전문 해설진의 작성부터 검수까지, 내가 원하는 '} />
              <TextFieldContent text={'서비스를 만나볼 수 있어요.'} />
            </div>
            <div>
              <Image src={FolderThird} alt="글공방 AI" />
            </div>
          </div>
        </div>
        <div className="grid w-full text-center bg-[#F6F7F9]">
          <div className="flex mt-[6rem] mb-5 mx-auto">
            <TextTitleField text={'효율적인 원클릭 솔루션'} />
            <p className="text-[1.50rem] font-bold grid items-end text-primary-500">,</p>
            <TextTitleField text={'글공방'} />
          </div>
          <div className="w-[71vw] flex justify-between mx-auto mb-[5rem]">
            <div className="relative">
              <Image src={SoultionFirst} alt="글공방 소개" />
              <div className="absolute top-0 z-10 text-left ml-9 mt-5 font ">
                <TextFieldWhite text={'더 저렴하게'} style="font-bold" />
                <TextFieldWhite text={'해외의 유사 서비스 대비 60% 저렴한 '} style="font-medium text-base" />
                <TextFieldWhite text={'가격으로 부담없이 맞춤형 대체 택스트를 '} style="font-medium text-base" />
                <TextFieldWhite text={'만들어보세요.'} style="font-medium text-base" />
              </div>
            </div>
            <div className="relative">
              <Image src={SoultionSecond} alt="글공방 소개" />
              <div className="absolute top-0 z-10 text-left ml-9 mt-5 font ">
                <TextFieldWhite text={'더 간편하게'} style="font-bold" />
                <TextFieldWhite text={'웹사이트의 주소나 이미지 파일을 첨부하기만'} style="font-medium text-base" />
                <TextFieldWhite text={'하면 클릭 한 번으로 대체텍스트를 생성할 수 '} style="font-medium text-base" />
                <TextFieldWhite text={'있어요. 더욱 빠른 글공방 AI를 만나보세요.'} style="font-medium text-base" />
              </div>
            </div>
          </div>
        </div>
        <div className="grid w-full text-center ">
          <div className="flex mt-[6rem] mb-5 mx-auto">
            <TextTitleField text={'글공방과 함께한 기업들'} />
          </div>
          <div className="grid mb-[4rem]">
            <div>
              <TextFieldContent text={'정보 접근성의 도약, 글공방이 함께합니다'} />
            </div>
          </div>
          <div className="w-[67%] flex justify-center mx-auto mb-[5rem]">
            <div>
              <Image src={IntroCompany} alt="글공방 소개" />
            </div>
          </div>
        </div>
        <div className="w-full relative">
          <div className="bg-[#1B72FF] w-full h-[32rem]">
            <div className="mx-auto py-[8rem] text-center font">
              <div>
                <TextFieldWhite text={'지금 무료로 시작하세요!'} style={'text-[3.125rem] font-bold'} />
              </div>
              <div className="mt-4">
                <TextFieldWhite text={'다양한 기능을 체험해보고,'} style={'text-xl font-bold '} />
                <TextFieldWhite text={'모두를 위한 정보접근성을 실천하세요.'} style={'text-xl font-bold '} />
              </div>
              <div className="mt-7">
                <ActionButtonBlack text="시작하기" size="w-32 h-[2.81rem]" />
              </div>
              <div className="mt-7">
                <TextFieldWhite
                  text={'본 홈페이지에는 글공방이 작성한 대체텍스트가 포함되어 있습니다.'}
                  style={'text-base font-normal '}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default HomeMain;
