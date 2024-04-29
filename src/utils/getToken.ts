export const getToken = async () => {
  const token = localStorage.getItem('accessToken');
  return token;
};
