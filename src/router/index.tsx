import React from 'react'

import Home from './../pages/Home'
import NotFound from './../pages/NotFound'
import Cart from './../pages/Cart'

export const publicRoutes = [
  { path: '', element: <Home /> },
  { path: '/cart', element: <Cart /> },
  { path: '*', element: <NotFound /> },
]
