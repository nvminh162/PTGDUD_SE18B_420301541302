import React from 'react'
import { Routes, Route, NavLink, Navigate } from 'react-router-dom'

import CounterAppReducer from './reducer/CounterReducer'
import CounterAppRedux from './redux/CounterRedux'
import CounterAppToolkit from './toolkit/CounterToolkit'

export default function CounterAppRouter() {
  return (
    <div className='flex flex-col justify-center'>
        <nav className='flex my-4 justify-center'>
        <NavLink
          to="/counter_app/reducer"
          className={({ isActive }) =>
            isActive ? 'bg-cyan-500 text-white p-2 rounded' : 'text-gray-500 p-2'
          }
        >
          Reducer
        </NavLink>
        <NavLink
          to="/counter_app/redux"
          className={({ isActive }) =>
            isActive ? 'bg-cyan-500 text-white p-2 rounded' : 'text-gray-500 p-2'
          }
        >
          Redux
        </NavLink>
        <NavLink
          to="/counter_app/toolkit"
          className={({ isActive }) =>
            isActive ? 'bg-cyan-500 text-white p-2 rounded' : 'text-gray-500 p-2'
          }
        >
          Toolkit
        </NavLink>
        </nav>

        <Routes>
          <Route path='/' element={<Navigate to='reducer'/>}></Route>

          <Route path='reducer' element={<CounterAppReducer/>}></Route>
          <Route path='redux' element={<CounterAppRedux/>}></Route>
          <Route path='toolkit' element={<CounterAppToolkit/>}></Route>
        </Routes>
    </div>
  )
}
