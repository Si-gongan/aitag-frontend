import { fetchWithInterceptor } from './fetchWithInterceptor';
import { API_ROUTE } from './routes';

export default async function uploadImage(imageData: string) {
  // 이미지 URL을 파일로 변환
  const response = await fetch(imageData);
  const blob = await response.blob();

  // FormData 생성 및 파일 추가
  const formData = new FormData();
  formData.append('file', blob);

  // 서버에 요청
  try {
    const reaponse = await fetchWithInterceptor(API_ROUTE.UPLOAD, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error('이미지 업로드에 대한 서버 응답이 실패했습니다.');
    }

    const result = await response.json();
    return result.url;
  } catch (error) {
    console.error('이미지 업로드 및 URL 요청 중 오류가 발생했습니다.', error);
    throw error;
  }
}
