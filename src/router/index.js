import React from 'react'

import Cart from '../pages/Cart'
import Home from './../pages/Home'
import NotFound from './../pages/NotFound'

export const publicRoutes = [
  { path: '/', element: <Home /> },
  { path: '/cart', element: <Cart /> },
  { path: '*', element: <NotFound /> },
]
