export const CREATE_TABS = [
  { title: 'URL 입력', id: 'url' },
  { title: '이미지 업로드', id: 'image' },
];

export const CREAT_IMAGE_SECTION = [
  {
    title: '웹사이트 URL로 대체텍스트 생성하기',
    description: [
      '대체텍스트 생성을 원하는 웹사이트의 URL주소를 입력한 후,',
      '대체텍스트 생성이 필요한 이미지를 선택해주세요.',
    ],
  },
  {
    title: '이미지 파일로 대체텍스트 생성하기',
    description: [
      '대체텍스트 생성을 원하는 이미지 파일을 업로드 하세요.',
      '권장 이미지 해상도는 가로 + 세로 영역 5000px 이하 입니다.',
    ],
  },
];

export const URL_TABLE_HEADER = [
  { text: 'URL 주소', value: 'urlAddress' },
  { image: '/images/mingcute_close-fill.svg', value: 'delete' },
];

export const IMAGE_TABLE_HEADER = [
  { text: '이미지', value: 'image' },
  { text: '기존 대체 텍스트', value: 'alt' },
  { text: '언어 선택', value: 'language' },
  { text: '맞춤형 키워드', value: 'keyword' },
];

export const URL_PREVIEW_TABLE_HEADER = [
  { text: '이미지', value: 'thumbnail' },
  { text: '기존 대체 텍스트', value: 'thumbnail' },
  { text: '언어 선택', value: 'thumbnail' },
  { text: '맞춤형 키워드', value: 'thumbnail' },
];

export const TABLE_BODY_NUMBER = {
  URL_LIST: 5,
  URL_IMAGE_LIST: 5,
};

export const WorkItemFormFormat = {
  image: '',
  language: 'Korean',
  keywords: [],
};

export const ExportRequestFormFormat = {
  title: '해설진 생성 요청',
  target: 'comment',
  works: [
    {
      image: '',
      language: 'Korean',
      keywords: [],
    },
  ],
  detail: '',
};

export const AiRequestFormFormat = {
  title: 'ai 생성 요청',
  target: 'ai',
  works: [
    {
      image: '',
      language: 'Korean',
      keywords: [],
    },
  ],
};

export const ERROR_MESSAGE = {
  KEYWORDS_LENGTH: '10자 이내로 입력해 주세요.',
  KEYWORDS_COUNT: '키워드는 3개까지 입력할 수 있어요.',
};

export const DASHBOARD_SORT = [
  { id: 'ai', name: 'AI 생성' },
  { id: 'inspect', name: '해설진 검수' },
  { id: 'comment', name: '해설진 작성' },
];

export const ISPECT_SORT = [
  { id: 'ai', name: 'AI 생성' },
  { id: 'inspect', name: '해설진 검수' },
];

export const DOWNLOAD_SORT = [
  { id: 'csv', name: 'CSV' },
  { id: 'json', name: 'JSON' },
  { id: 'txt', name: 'TXT' },
];

export const DASHBOARD_LIMIT = '10';
