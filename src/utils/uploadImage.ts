import { getToken } from './getToken';
import { API_ROUTE } from './routes';

// FIX: getPublicUrl로 이름 바꾸는 게 어떤지
export default async function uploadImage(imageData: File) {
  const formData = new FormData();
  formData.append('file', imageData);

  const accessToken = await getToken();

  const options = {
    method: 'POST',
    body: formData,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };

  const responseUrl = await fetch(API_ROUTE.UPLOAD, options);
  const result = await responseUrl.json();
  const newGongbangUrl = result.result.fileUrl;
  return newGongbangUrl;
}
