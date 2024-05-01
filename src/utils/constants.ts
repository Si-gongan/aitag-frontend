export const CREATE_TABS = [
  { title: 'URL 입력', id: 'url' },
  { title: '이미지 업로드', id: 'img' },
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
  title: 'url 해설진 생성 요청',
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
