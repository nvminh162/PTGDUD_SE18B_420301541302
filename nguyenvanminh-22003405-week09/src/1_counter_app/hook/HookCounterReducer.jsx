export const initialState = {
  a: '',
  b: '',
  result: '',
};

const HookCounterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_A':
      return { ...state, a: action.payload };
    case 'SET_B':
      return { ...state, b: action.payload };
    case 'INCREASE':
      return { ...state, result: state.a + state.b };
    case 'DECREASE':
      return { ...state, result: state.a - state.b };
    default:
      return state;
  }
};

export default HookCounterReducer;