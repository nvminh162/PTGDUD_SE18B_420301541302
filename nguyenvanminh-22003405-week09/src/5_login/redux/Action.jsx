export const login = (user) => ({
    type: 'LOGIN',
    payload: user,
  });
  
  export const logout = () => ({
    type: 'LOGOUT',
  });
  
  export const setUserInfo = (userInfo) => ({
    type: 'SET_USER_INFO',
    payload: userInfo,
  });