import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AuthUI from '../AuthUI';
import { login, logout, setUserInfo } from './Action';

export default function AuthRedux() {
  const { user, isLoggedIn } = useSelector((state) => {
    return {
      user: state.authRedux.user,
      isLoggedIn: state.authRedux.isLoggedIn,
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