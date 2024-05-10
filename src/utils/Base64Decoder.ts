// export default function Base64ToBlob(base64Data: string) {
//   // Base64 데이터를 Blob으로 변환
//   const base64Parts = base64Data.split(',');
//   const base64String = base64Parts[1];
//   const contentType = base64Parts[0].split(';')[0].split(':')[1];
//   const byteCharacters = atob(base64String);
//   const byteNumbers = new Array(byteCharacters.length);

//   for (let i = 0; i < byteCharacters.length; i++) {
//     byteNumbers[i] = byteCharacters.charCodeAt(i);
//   }

//   const byteArray = new Uint8Array(byteNumbers);
//   const blob = new Blob([byteArray], { type: contentType });

//   console.log({ blob });
// }

//

export default function Base64Decoder(imageData: string) {
  if (imageData.includes('data:')) {
    const base64String = imageData.split(',')[1]; // 데이터 URL의 접두사 제거
    const binaryString = atob(base64String); // Base64 디코딩

    const bytes = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    const blob = new Blob([bytes], { type: 'image/svg+xml' }); // SVG 형식으로 설정
    const imageUrl = URL.createObjectURL(blob);
    console.log(imageUrl);
    return imageUrl;
  } else {
    return imageData;
  }
}
