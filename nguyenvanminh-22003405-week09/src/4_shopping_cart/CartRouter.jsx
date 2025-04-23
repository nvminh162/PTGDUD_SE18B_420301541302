import React from 'react'
import { Routes, Route, NavLink, Navigate } from 'react-router-dom'

import CartReducer from './reducer/CartReducer'
import CartRedux from './redux/CartRedux'
import CartToolkit from './toolkit/CartToolkit'

export default function CartRouter() {
  return (
    <div className='flex flex-col justify-center '>
        <nav className='my-4 flex justify-center'>
        <NavLink
          to="/shopping_cart/reducer"
          className={({ isActive }) =>
            isActive ? 'bg-cyan-500 text-white p-2 rounded' : 'text-gray-500 p-2'
          }
        >
          Reducer
        </NavLink>
        <NavLink
          to="/shopping_cart/redux"
          className={({ isActive }) =>
            isActive ? 'bg-cyan-500 text-white p-2 rounded' : 'text-gray-500 p-2'
          }
        >
          Redux
        </NavLink>
        <NavLink
          to="/shopping_cart/toolkit"
          className={({ isActive }) =>
            isActive ? 'bg-cyan-500 text-white p-2 rounded' : 'text-gray-500 p-2'
          }
        >
          Toolkit
        </NavLink>
        </nav>

        <Routes>
          <Route path='/' element={<Navigate to='reducer'/>}></Route>

          <Route path='reducer' element={<CartReducer/>}></Route>
          <Route path='redux' element={<CartRedux/>}></Route>
          <Route path='toolkit' element={<CartToolkit/>}></Route>
        </Routes>
    </div>
  )
}
