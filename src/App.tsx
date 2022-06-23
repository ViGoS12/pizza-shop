import './scss/app.scss'
import { Route, Routes } from 'react-router-dom'
import { publicRoutes } from './router/index'
import AppLayout from './layouts/AppLayout'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<AppLayout />}>
          {publicRoutes.map((route) => (
            <Route
              path={route.path}
              element={route.element}
              key={route.path}></Route>
          ))}
        </Route>
      </Routes>
    </div>
  )
}

export default App
