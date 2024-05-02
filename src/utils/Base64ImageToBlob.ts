export default function Base64ImageToBlob(base64Data: string) {
  // Base64 데이터를 Blob으로 변환
  const base64Parts = base64Data.split(',');
  const base64String = base64Parts[1];
  const contentType = base64Parts[0].split(';')[0].split(':')[1];
  const byteCharacters = atob(base64String);
  const byteNumbers = new Array(byteCharacters.length);

  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
  }

  const byteArray = new Uint8Array(byteNumbers);
  const blob = new Blob([byteArray], { type: contentType });

  console.log({ blob });
}
