import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AuthUI from '../AuthUI';
import { login, logout, setUserInfo } from './AuthSlice';

export default function AuthToolkit() {
  const { user, isLoggedIn } = useSelector((state) => {
    return {
      user: state.authToolkit.user,
      isLoggedIn: state.authToolkit.isLoggedIn,
    };
  });
  const dispatch = useDispatch();

  const handleLogin = (credentials) => {
    dispatch(login({
      username: credentials.username,
      email: `${credentials.username}@example.com`,
    }));
  };

  return (
    <AuthUI
      user={user}
      isLoggedIn={isLoggedIn}
      login={handleLogin}
      logout={() => dispatch(logout())}
      setUserInfo={(userInfo) => dispatch(setUserInfo(userInfo))}
    />
  );
}