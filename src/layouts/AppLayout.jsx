import React from 'react'
import Header from './../components/header/Header'

export default function AppLayout({ searchValue, setSearchValue, children }) {
  return (
    <div className='wrapper'>
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      <div className='content'>{children}</div>
    </div>
  )
}
