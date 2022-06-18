import './scss/app.scss'
import { Route, Routes } from 'react-router-dom'
import { publicRoutes } from './router'

function App() {
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
