export const ReteMock = {
  id: 'sampleid',
  clientId: 'sampleid',
  name: '유저 요금제 정보 샘플',
  email: 'user@naver.com',
  phone: '82-10-9299-4816',
  rate: 'basic',
  credit: 34,
  profileImgUrl: '',
  createdAt: '',
};

export const PaymentMockData = [
  { rate: 'basic', createdAt: '2024-05-06T12:00:00.000Z', amount: 3990, method: '신용카드' },
  { rate: 'standard', createdAt: '2024-05-06T12:00:00.000Z', amount: 9900, method: '신용카드' },
  { rate: 'premium', createdAt: '2024-05-06T12:00:00.000Z', amount: 14990, method: '신용카드' },
  { rate: 'none', createdAt: '2024-05-06T12:00:00.000Z', amount: 0, method: '신용카드' },
  { rate: 'basic', createdAt: '2024-05-06T12:00:00.000Z', amount: 3990, method: '신용카드' },
  { rate: 'standard', createdAt: '2024-05-06T12:00:00.000Z', amount: 9900, method: '신용카드' },
  { rate: 'premium', createdAt: '2024-05-06T12:00:00.000Z', amount: 14990, method: '신용카드' },
  { rate: 'none', createdAt: '2024-05-06T12:00:00.000Z', amount: 0, method: '신용카드' },
  { rate: 'basic', createdAt: '2024-05-06T12:00:00.000Z', amount: 3990, method: '신용카드' },
  { rate: 'standard', createdAt: '2024-05-06T12:00:00.000Z', amount: 9900, method: '신용카드' },
];

const notice_content1 = `### 뢰 페이지 해상도 및 규격 안내

- 의뢰하신 페이지 안에 있는 이미지에 적합한 대체텍스트를 추출하기 위해 다음의 조건을 지켜주세요. 의뢰 페이지의 해상도 및 규격 조건에 맞지 않는 이미지 업로드시 대체텍스트 생성의 정확도가 떨어질 수 있습니다.
- 이미지 해상도
    - 가로와 세로 총합 영역 5000px  이하가 권장 규격입니다. 평균적인 쇼핑몰 웹페이지의 가로 평균이 800px이라는 점을 참고해주세요.
- 페이지 기준이 아니라 페이지 내부의 사진 이미지를 기준으로 의뢰 비용이 책정됩니다. 따라서 무리해서 하나의 페이지에 모든 이미지를 담아 의뢰하는 것을 지양해주세요. 해상도와 규격의 조건을 충족할 때 의뢰하신 내용에 알맞은 대체텍스트가 생성됩니다.
    - GOOD
    
    ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/9745a1f6-1877-4b0d-8dbd-a12004c489d8/bf36e8a8-cb9d-4798-b324-3d4667a7b3ef/Untitled.png)
    
    - BAD
        
        ![si-gongan.imweb.me__fbclid=PAAabwL5DOWCDz6Za_I5UnikFA_-LoxEEY7JL8DFDpSy5ANwrMdl1USGJM3Fk_aem_AfpZyyilnTmtEoccKMnJtcP-MhH-EydO3AxxFxRpno3XszVwZB_mGUNBDMVELBdjmjw.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/9745a1f6-1877-4b0d-8dbd-a12004c489d8/09e74bc4-afc7-4f07-9c92-647ae3259637/si-gongan.imweb.me__fbclidPAAabwL5DOWCDz6Za_I5UnikFA_-LoxEEY7JL8DFDpSy5ANwrMdl1USGJM3Fk_aem_AfpZyyilnTmtEoccKMnJtcP-MhH-EydO3AxxFxRpno3XszVwZB_mGUNBDMVELBdjmjw.png)`;

export const NoticeMockData = [
  {
    content: notice_content1,
    createdAt: '2024-05-17T13:27:01.104Z',
    title: '의뢰 페이지 해상도 및 규격 안내',
    type: 'notice',
    writer: '글공방 서비스팀',
  },
  {
    content: notice_content1,
    createdAt: '2024-03-12T13:27:01.104Z',
    title: '의뢰 페이지 해상도 및 규격 안내',
    type: 'notice',
    writer: '글공방 서비스팀',
  },
  {
    content: notice_content1,
    createdAt: '2023-11-28T13:27:01.104Z',
    title: '의뢰 페이지 해상도 및 규격 안내',
    type: 'notice',
    writer: '글공방 서비스팀',
  },
];

const feature_content1 = `에이택의 서비스는 다음의 3가지 옵션으로 운영되어, 니즈에 맞게 자유롭게 선택할 수 있습니다. 

AI 생성: AI가 이미지로부터 정보를 추출하여 대체 텍스트를 제작합니다. 가장 저렴한 옵션으로, 대체 텍스트가 빠르게 필요할 때 간편한 AI 생성 서비스를 이용할 수 있습니다.

해설진 검수: AI가 우선 제작한 대체 텍스트에 전문 해설진이 추가로 검수하여 대체 텍스트를 제작합니다. 대체 텍스트에 반영하기를 원하는 요청 사항이 있을 때, 구체적인 해설진 검수 서비스를 이용할 수 있습니다. AI와 해설진의 장점을 모두 취할 수 있는 옵션입니다. 

해설진 작성: 전문 해설진이 세부적인 니즈를 기반으로 대체 텍스트를 처음부터 작성해 제작합니다. 웹사이트의 방향성, 컨셉, 목표 등의 세부적인 사항을 함께 고려할 수 있으며, 미술 작품 해설과 같이 세밀하게 표현된 대체 텍스트가 필요할 경우 해설진 작성 옵션이 적절합니다. 

<대체 텍스트 예시>

고객 요청 사항: ‘꽃밭’이라는 단어를 포함해주시고, 사진의 분위기가 잘 느껴지도록 작성해주세요.

AI 생성: 꽃밭에서 세 명의 여성이 웃으며 대화를 나누고 있는 사진입니다. 앞치마를 입은 여성도 있고, 줄무늬 셔츠를 입은 여성도 있습니다. 꽃들은 다채로운 색상을 가지고 있습니다. 모두 행복해 보입니다. 따뜻한 분위기의 사진입니다.

해설진 검수: 꽃밭 앞에 나란히 앉은 세 명의 여성이 웃으며 대화를 나누고 있는 사진입니다. 왼쪽 여성은 검은색 가죽 자켓과 청바지를, 가운데 여성은 붉은색 줄무늬 셔츠와 청바지를, 오른쪽 여성은 흰색 블라우스에 멜빵 바지를 입고 있습니다. 즐겁고 따뜻한 분위기가 느껴지는 사진입니다. 

해설진 작성: 세 명의 여성이 꽃밭에 앉아 웃으며 대화를 나누고 있는 사진입니다. 왼쪽 여성은 검은색 가죽 자켓과 청바지를, 가운데 여성은 붉은색 줄무늬 셔츠와 청바지를, 오른쪽 여성은 흰색 블라우스에 멜빵 바지를 입고 있습니다. 서로를 바라보며 활짝 웃고 있는 모습이 친구와 대화를 나누듯 즐거워 보입니다. 봄 날씨에 촬영된 듯 따뜻하고 화사한 분위기가 느껴지는 사진입니다.  

*실제 에이택 AI와 전문 해설진이 작성한 대체 텍스트입니다.`;

export const FaqMockDataPayment = [
  {
    type: 'payment',
    title: '과금 정책이 궁금합니다.',
    content:
      '월별 구독제(100/300/500 credit 구매)와 20 credit 개별 구매 중 선택하실 수 있습니다. 한 이미지당 AI 대체 텍스트에는 1 credit, 해설진 검수 대체 텍스트에는 6 credit, 해설진 작성 대체 텍스트에는 20 credit이 필요합니다. 자세한 내용은 요금제 페이지(요금제 페이지로 연결)에서 확인하실 수 있습니다.',
    writer: '글공방팀',
    createdAt: '2024-05-07T05:21:52.429Z',
  },
  {
    type: 'payment',
    title: '중간에 구독하고 있던 요금제를 해지할 수 있나요?',
    content:
      '네, 해지할 수 있습니다. 하지만 해당 달에 이용하고 있는 요금제는 해지가 불가합니다. 다음 달부터 구독하고 있는 요금제를 해지할 수 있습니다.',
    writer: '글공방팀',
    createdAt: '2024-05-06T12:00:00.000Z',
  },
  {
    type: 'payment',
    title: '요금제를 해지하면 과거 이용 내역이 사라지나요?',
    content: '아니요. 요금제를 해지한 이후에도 ‘My page’ 내 ‘History’ 탭에서 이용 내역 확인이 가능합니다.',
    writer: '글공방팀',
    createdAt: '2024-04-07T05:21:52.429Z',
  },
  {
    type: 'payment',
    title: '결제 정보는 어디에서 등록할 수 있나요?',
    content: '‘My page’ 내 ‘개인정보 수정’ 탭에서 등록이 가능합니다.',
    writer: '글공방팀',
    createdAt: '2024-05-05T10:15:00.000Z',
  },
  {
    type: 'payment',
    title: '결제 정보는 어디에서 수정할 수 있나요?',
    content: 'My page 내 ‘개인정보 수정’ 탭, 혹은 ‘결제 정보’ 탭 내에서 수정이 가능합니다.',
    writer: '글공방팀',
    createdAt: '2024-05-04T15:30:00.000Z',
  },
];

export const FaqMockDataFeature = [
  {
    type: 'feature',
    title: '에이택 AI 대체 텍스트는 어떻게 생성되나요?',
    content:
      '에이택은 GPT-4 모델에 정확도를 높인 자체 기술을 더해 이미지로부터 다양한 정보를 추출하고, 추출된 결과를 종합 분석해 최적의 captioning을 생성합니다. 원하는 이미지 파일 혹은 웹사이트 URL을 업로드한 후, 원하는 대체 텍스트 생성 방식을 선택하면 에이택의 대체 텍스트를 받아볼 수 있습니다.',
    writer: '글공방팀',
    createdAt: '2024-05-02T14:20:00.000Z',
  },
  {
    type: 'feature',
    title: 'AI 생성, 해설진 검수, 해설진 작성 서비스는 어떻게 다른가요?',
    content: feature_content1,
    writer: '글공방팀',
    createdAt: '2024-05-03T09:45:00.000Z',
  },
  {
    type: 'feature',
    title: '대체 텍스트는 누가, 어떻게 작성하나요?',
    content: `에이택의 해설 데이터를 바탕으로 고도화된 **AI 모델**이 적절한 대체 텍스트를 제공합니다.

    보다 구체적이고 맞춤화된 대체 텍스트는 **전문 해설진**이 직접 검수합니다. 해설 작성에 사용되는 시공간의 가이드라인은 화면 해설 작가 및 시각장애인과의 인터뷰 및 풍부한 대체 텍스트 제공 경험을 기반으로 완성되었습니다. 
    
    *전문 해설진: 시공간만의 대체 텍스트 작성 가이드라인을 바탕으로 대체 텍스트 작성에 특화된 전문 인력`,
    writer: '글공방팀',
    createdAt: '2024-05-01T08:00:00.000Z',
  },
  {
    type: 'feature',
    title: '맞춤 키워드가 무엇인가요?',
    content: `웹페이지 또는 콘텐츠를 대표하는 키워드 중, AI가 대체 텍스트 생성 시 포함하길 바라는 키워드를 입력할 수 있습니다. 키워드는 10자 이내로, 총 3개까지 입력 가능합니다.

    예를 들어, 브랜드 명과 브랜드가 추구하는 이미지 단어를 맞춤 키워드로 포함할 수 있습니다.`,
    writer: '글공방팀',
    createdAt: '2024-04-30T16:40:00.000Z',
  },
  {
    type: 'feature',
    title: '전문 해설진이 서비스를 제공하는 데 걸리는 시간은 어느 정도인가요?',
    content: '평균 3영업일 내로 전달드리고 있습니다. 이미지 양에 따라 걸리는 시간이 상이할 수 있습니다.',
    writer: '글공방팀',
    createdAt: '2024-04-30T16:40:00.000Z',
  },
];

export const FaqMockDataUsage = [
  {
    type: 'usage',
    title: '생성된 대체텍스트는 어디에서 볼 수 있나요?',
    content: `‘My page’ 내 ‘History’ 탭 내에서 제공되는 결과 리포트를 확인할 수 있습니다.`,
    writer: '글공방팀',
    createdAt: '2024-02-12T16:40:00.000Z',
  },
  {
    type: 'usage',
    title: '해설진 작성 세부 요청서에는 어떤 내용이 들어가야 하나요?',
    content: `내용, 어투, 길이, 포함할 단어 등 대체 텍스트 검수 및 작성 시 해설진이 참고하길 바라는 내용을 적어주시면 됩니다. 

  예를 들어, “색상 표현이 상상하기 용이했으면 좋겠어요.”, “여러 가지 색에 대한 묘사보다는 중점적인 색 하나를 위주로 작성해 주세요.”, “스토리텔링 식으로 작성해 주세요.”와 같은 요청이 가능합니다.`,
    writer: '글공방팀',
    createdAt: '2024-03-20T16:40:00.000Z',
  },
  {
    type: 'usage',
    title: '해설진이 검수/작성한 대체 텍스트에 추가 수정 요청이 가능한가요?',
    content: `해설진이 검수/작성한 대체 텍스트의 경우, 아쉽게도 추가 수정 요청은 불가합니다.

  수정이 필요한 경우, 새로운 의뢰로 접수해야 합니다.
  
  AI가 생성한 대체 텍스트의 경우, 해설진 검수 요청을 통해 수정이 가능합니다.`,
    writer: '글공방팀',
    createdAt: '2024-05-30T16:40:00.000Z',
  },
  {
    type: 'usage',
    title: '대체 텍스트를 저장하고 싶어요. ',
    content:
      '생성이 완료된 대체 텍스트는 ‘워크스페이스’에서 엑셀 파일로 다운로드할 수 있습니다. ‘워크스페이스-대시보드’에서 다운로드 아이콘을 누르거나, 개별 의뢰 창에서 ‘다운로드’ 버튼을 눌러 다운로드가 가능합니다. ',
    writer: '글공방팀',
    createdAt: '2024-05-30T16:40:00.000Z',
  },
];
