import React from 'react'
import { Routes, Route, NavLink, Navigate } from 'react-router-dom'

import LoginReducer from './reducer/AuthReducer'
import LoginRedux from './redux/AuthRedux'
import LoginToolkit from './toolkit/AuthToolkit'

export default function Login() {
  return (
    <div className='flex flex-col justify-center '>
        <nav className='my-4 flex justify-center'>
        <NavLink
          to="/login/reducer"
          className={({ isActive }) =>
            isActive ? 'bg-cyan-500 text-white p-2 rounded' : 'text-gray-500 p-2'
          }
        >
          Reducer
        </NavLink>
        <NavLink
          to="/login/redux"
          className={({ isActive }) =>
            isActive ? 'bg-cyan-500 text-white p-2 rounded' : 'text-gray-500 p-2'
          }
        >
          Redux
        </NavLink>
        <NavLink
          to="/login/toolkit"
          className={({ isActive }) =>
            isActive ? 'bg-cyan-500 text-white p-2 rounded' : 'text-gray-500 p-2'
          }
        >
          Toolkit
        </NavLink>
        </nav>

        <Routes>
          <Route path='/' element={<Navigate to='reducer'/>}></Route>

          <Route path='reducer' element={<LoginReducer/>}></Route>
          <Route path='redux' element={<LoginRedux/>}></Route>
          <Route path='toolkit' element={<LoginToolkit/>}></Route>
        </Routes>
    </div>
  )
}
