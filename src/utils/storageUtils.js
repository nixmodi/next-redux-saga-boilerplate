export const setUserData = data => {
  localStorage.setItem('userData', JSON.stringify(data));
};
export const setUserToken = token => {
  localStorage.setItem('token', `Bearer ${token}`);
};
export const setRememberUser = isRemember => {
  localStorage.setItem('isRemember', isRemember);
};
export const getRememberUser = () => {
  localStorage.getItem('isRemember');
};
export const getUserToken = () => localStorage.getItem('token');
export const getUserData = () => JSON.parse(localStorage.getItem('userData'));

export const unsetUserData = () => {
  localStorage.removeItem('userData');
};
export const unsetUserToken = () => {
  localStorage.removeItem('token');
};
