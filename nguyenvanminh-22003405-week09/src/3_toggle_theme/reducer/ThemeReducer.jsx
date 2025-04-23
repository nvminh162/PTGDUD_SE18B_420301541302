import React, { useContext } from 'react'

import { ThemeContext } from '../hook/ThemeContext';
import ThemeUI from '../ThemeUI';

export default function ToggleThemeReducer() {
  const {state, dispatch} = useContext(ThemeContext)

  return (
    <ThemeUI
      theme={state.theme}
      toggleTheme={() => dispatch({ type: "TOGGLE_THEME" })}
    />
  );
}
