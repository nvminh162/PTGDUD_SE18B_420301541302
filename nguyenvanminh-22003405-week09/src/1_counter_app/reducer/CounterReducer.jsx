import React, { useContext } from 'react';
import CounterUI from '../CounterUI';
import { CounterContext } from '../hook/HookCounterContext'; // Bây giờ đã hợp lệ

export default function CounterReducer() {
  const { state, dispatch } = useContext(CounterContext);

  return (
    <CounterUI 
      a={state.a} 
      b={state.b} 
      result={state.result} 
      setA={(value) => dispatch({ type: 'SET_A', payload: value })}
      setB={(value) => dispatch({ type: 'SET_B', payload: value })}
      onIncrease={() => dispatch({ type: 'INCREASE' })}
      onDecrease={() => dispatch({ type: 'DECREASE' })}
    />
  );
}
