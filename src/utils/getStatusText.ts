export const getStatusText = (isComplete: boolean, sort: string) => {
  switch (sort) {
    case 'ai':
      return isComplete ? '생성완료' : '생성중';
    case 'comment':
      return isComplete ? '작성 완료' : '작성 진행중';
    case 'inspect':
      return isComplete ? '검수 완료' : '검수 진행중';
  }
};
