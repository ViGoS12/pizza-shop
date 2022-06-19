import './scss/app.scss'
import { Route, Routes } from 'react-router-dom'
import { publicRoutes } from './router'
import { useState } from 'react'

function App() {
  const [searchValue, setSearchValue] = useState('')
  return (
    <div>
      <Routes>
        {publicRoutes.map((route) => (
          <Route
            path={route.path}
            element={route.element}
            key={route.path}></Route>
        ))}
      </Routes>
    </div>
  )
}

export default App
