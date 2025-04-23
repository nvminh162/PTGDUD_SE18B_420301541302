export const initialState = {
    theme: 'light',
  };
  
  export default function ThemeReducer(state = initialState, action) {
    switch (action.type) {
      case 'TOGGLE_THEME':
        return {
          theme: state.theme === 'light' ? 'dark' : 'light',
        };
      default:
        return state;
    }
  }
  