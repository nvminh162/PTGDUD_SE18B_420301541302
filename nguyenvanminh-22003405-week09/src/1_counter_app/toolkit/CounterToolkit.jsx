import React from 'react'
import { useSelector, useDispatch } from 'react-redux'


import CounterUI from '../CounterUI'
import { setA, setB, increase, decrease } from './CounterSlice'

export default function CounterToolkit() {
  const { a, b, result } = useSelector((state) => state.counterToolkit);
  const dispatch = useDispatch();

  return (
    <CounterUI 
    a={a} 
    b={b} 
    result={result} 
    setA={(value) => dispatch(setA(value))} 
    setB={(value) => dispatch(setB(value))} 
    onIncrease={() => dispatch(increase())} 
    onDecrease={() => dispatch(decrease())}
  />
  )
}
