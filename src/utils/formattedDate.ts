// 2024-05-07T05:21:52.429Z를 2030년 05월 13일로 변환
export function formattedDate(dateString: string) {
  const newDate = new Date(dateString);
  const year = newDate.getFullYear();
  const month = String(newDate.getMonth() + 1).padStart(2, '0');
  const date = String(newDate.getDate()).padStart(2, '0');
  const fullDate = `${year}년 ${month}월 ${date}일`;

  return fullDate;
}

// 2024-05-07T05:21:52.429Z를 2030.05.13로 변환
export function formattedDateV2(dateString: string) {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}.${month}.${day}`;
}

// 2024-05-07T05:21:52.429Z를 2030.05와 13로 변환
export function formattedDateV3(dateString: string) {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return { yearmonth: `${year}.${month}`, date: day };
}
