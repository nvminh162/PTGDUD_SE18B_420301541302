export const initialState = {
    user: null,
    isLoggedIn: false,
  };
  
  export default function AuthReducer(state=initialState, action) {
    switch (action.type) {
      case 'LOGIN':
        return {
          ...state,
          user: action.payload,
          isLoggedIn: true,
        };
      case 'LOGOUT':
        return {
          ...state,
          user: null,
          isLoggedIn: false,
        };
      case 'SET_USER_INFO':
        return {
          ...state,
          user: {
            ...state.user,
            ...action.payload,
          },
        };
      default:
        return state;
    }
  }