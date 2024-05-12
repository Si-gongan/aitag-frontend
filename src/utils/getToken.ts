export const getToken = async () => {
  const token = localStorage.getItem('token');
  return token;
};
