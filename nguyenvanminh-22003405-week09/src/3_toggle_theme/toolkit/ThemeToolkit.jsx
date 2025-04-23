import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ThemeUI from '../ThemeUI';
import { toggleTheme } from './ThemeSlice';

export default function ThemeToolkit() {
  const theme = useSelector((state) => state.themeToolkit.theme);
  const dispatch = useDispatch();

  return (
    <ThemeUI
      theme={theme}
      toggleTheme={() => dispatch(toggleTheme())}
    />
  );
}