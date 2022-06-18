import React from 'react'
import Cart from '../pages/Cart'
import Home from './../pages/Home'

export const publicRoutes = [
  { path: '/home', element: <Home /> },
  { path: '/cart', element: <Cart /> },
  { path: '*', element: <Home /> },
]
