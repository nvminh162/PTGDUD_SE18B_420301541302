import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import CounterUI from '../CounterUI'
import { setA, setB, increase, decrease } from '../redux/action'

export default function CounterRedux() {
  const state = useSelector((state) => state.counterReducer)
  const dispatch = useDispatch()

  return (
    <CounterUI 
      a={state.a} 
      b={state.b} 
      result={state.result} 
      setA={(value) => dispatch(setA(value))} 
      setB={(value) => dispatch(setB(value))} 
      onIncrease={() => dispatch(increase())} 
      onDecrease={() => dispatch(decrease())}
    />
  )
}
