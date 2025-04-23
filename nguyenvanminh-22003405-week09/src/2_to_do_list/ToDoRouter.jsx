import React from 'react'
import { Routes, Route, NavLink, Navigate } from 'react-router-dom'

import ToDoReducer from './reducer/ToDoReducerUI'
import ToDoRedux from './redux/ToDoRedux'
import ToDoToolkit from './toolkit/ToDoToolkit'

export default function ToDoRouter() {
  return (
    <div className='flex flex-col justify-center '>
        <nav className='flex justify-center my-4' >
        <NavLink
          to="/to_do_list/reducer"
          className={({ isActive }) =>
            isActive ? 'bg-cyan-500 text-white p-2 rounded' : 'text-gray-500 p-2'
          }
        >
          Reducer
        </NavLink>
        <NavLink
          to="/to_do_list/redux"
          className={({ isActive }) =>
            isActive ? 'bg-cyan-500 text-white p-2 rounded' : 'text-gray-500 p-2'
          }
        >
          Redux
        </NavLink>
        <NavLink
          to="/to_do_list/toolkit"
          className={({ isActive }) =>
            isActive ? 'bg-cyan-500 text-white p-2 rounded' : 'text-gray-500 p-2'
          }
        >
          Toolkit
        </NavLink>
        </nav>

        <Routes>
          <Route path='/' element={<Navigate to='reducer'/>}></Route>

          <Route path='reducer' element={<ToDoReducer/>}></Route>
          <Route path='redux' element={<ToDoRedux/>}></Route>
          <Route path='toolkit' element={<ToDoToolkit/>}></Route>
        </Routes>
    </div>
  )
}
