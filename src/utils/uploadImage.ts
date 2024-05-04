import { getToken } from './getToken';
import { API_ROUTE } from './routes';

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
