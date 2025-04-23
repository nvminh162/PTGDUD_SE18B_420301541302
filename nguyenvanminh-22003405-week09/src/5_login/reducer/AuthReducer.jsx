import React, { useContext } from 'react';
import AuthUI from '../AuthUI';
import { AuthContext } from '../hook/AuthContext';

export default function AuthReducer() {
  const { state, dispatch } = useContext(AuthContext);

  const login = (credentials) => {
    // In a real app, you would call an API here
    dispatch({
      type: 'LOGIN',
      payload: {
        username: credentials.username,
        email: `${credentials.username}@example.com`,
      },
    });
  };

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  const setUserInfo = (userInfo) => {
    dispatch({ type: 'SET_USER_INFO', payload: userInfo });
  };

  return (
    <AuthUI
      user={state.user}
      isLoggedIn={state.isLoggedIn}
      login={login}
      logout={logout}
      setUserInfo={setUserInfo}
    />
  );
}