export const getResultDetailTitle = (target: string, isComplete: boolean, requestCommentPage: boolean) => {
  switch (target) {
    case 'ai':
      return requestCommentPage
        ? {
            title: '해설진 검수 세부 요청서',
            description: '검수가 필요한 구체적인 부분들이나 원하시는 수정방향성이 있으시다면 자유롭게 작성해주세요.',
            addDescription:
              '검수 서비스는 기본적으로 오탈자 검수, 부적절한 단어 삭제 및 대체, 문법 검수 등을 제공합니다.',
          }
        : {
            title: '생성 결과 확인',
            description: 'AI 대체 텍스트 생성 결과를 확인하고, 전문 해설진 검수를 요청해보세요.',
          };

    case 'comment':
      return isComplete
        ? {
            title: '작성 결과 확인',
            description:
              '전문 해설진의 검수 결과를 확인하세요. AI와 해설진의 대체텍스트를 비교해서 확인할 수 있습니다.',
          }
        : {
            title: '작성 진행중',
            description: '전문 해설진의 검수가 진행중입니다.',
          };
    case 'inspect':
      return isComplete
        ? {
            title: '검수 결과 확인',
            description:
              '전문 해설진의 검수 결괄르 확인하세요. AI와 해설진의 대체텍스트를 비교해서 확인할 수 있습니다.',
          }
        : {
            title: '검수 진행중',
            description: '전문 해설진의 작성이 진행중입니다.',
          };
  }
};
