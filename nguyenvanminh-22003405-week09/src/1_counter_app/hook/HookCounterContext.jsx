import { createContext, useReducer } from 'react';
import HookCounterReducer, { initialState } from './HookCounterReducer';

export const CounterContext = createContext();

export const CounterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(HookCounterReducer, initialState);

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};
