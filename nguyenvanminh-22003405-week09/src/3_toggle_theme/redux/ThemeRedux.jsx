import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ThemeUI from '../ThemeUI';
import { toggleTheme } from './Action';

export default function ThemeRedux() {
  const theme = useSelector((state) => state.themeRedux.theme);
  const dispatch = useDispatch();

  return (
    <ThemeUI
      theme={theme}
      toggleTheme={() => dispatch(toggleTheme())}
    />
  );
}