import React from 'react'
import Header from './../components/header/Header'

export default function AppLayout({ children }) {
  return (
    <div className='wrapper'>
      <Header />
      <div className='content'>{children}</div>
    </div>
  )
}
