import React from 'react'
import { Routes, Route, NavLink, Navigate } from 'react-router-dom'

import ToggleThemeReducer from './reducer/ThemeReducer'
import ToggleThemeRedux from './redux/ThemeRedux'
import ToggleThemeToolkit from './toolkit/ThemeToolkit'

export default function ToggleTheme() {
  return (
    <div className='flex flex-col justify-center '>
        <nav className='my-4 flex justify-center'>
        <NavLink
          to="/toggle_theme/reducer"
          className={({ isActive }) =>
            isActive ? 'bg-cyan-500 text-white p-2 rounded' : 'text-gray-500 p-2'
          }
        >
          Reducer
        </NavLink>
        <NavLink
          to="/toggle_theme/redux"
          className={({ isActive }) =>
            isActive ? 'bg-cyan-500 text-white p-2 rounded' : 'text-gray-500 p-2'
          }
        >
          Redux
        </NavLink>
        <NavLink
          to="/toggle_theme/toolkit"
          className={({ isActive }) =>
            isActive ? 'bg-cyan-500 text-white p-2 rounded' : 'text-gray-500 p-2'
          }
        >
          Toolkit
        </NavLink>
        </nav>

        <Routes>
          <Route path='/' element={<Navigate to='reducer'/>}></Route>

          <Route path='reducer' element={<ToggleThemeReducer/>}></Route>
          <Route path='redux' element={<ToggleThemeRedux/>}></Route>
          <Route path='toolkit' element={<ToggleThemeToolkit/>}></Route>
        </Routes>
    </div>
  )
}
