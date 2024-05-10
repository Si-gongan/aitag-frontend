export default function formattedDate(data: string) {
  const newDate = new Date(data);
  const year = newDate.getFullYear();
  const month = String(newDate.getMonth() + 1).padStart(2, '0');
  const date = String(newDate.getDate()).padStart(2, '0');
  const fullDate = `${year}년 ${month}월 ${date}일`;

  return fullDate;
}
