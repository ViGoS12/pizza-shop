import './scss/app.scss'
import Header from './components/header/Header'
import Categories from './components/categories/Categories'
import Sort from './components/sort/Sort'
import PizzaBlock from './components/PizzaBlock'
import { useEffect, useState } from 'react'

function App() {
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch('https://62adae8c402135c7acc4f3b7.mockapi.io/items')
      .then((res) => res.json())
      .then((array) => setItems(array))
  }, [])

  return (
    <div className='wrapper'>
      <Header />
      <div className='content'>
        <div className='container'>
          <div className='content__top'>
            <Categories />
            <Sort />
          </div>
          <h2 className='content__title'>Все пиццы</h2>
          <div className='content__items'>
            {items.map((obj) => (
              <PizzaBlock key={obj.id} {...obj} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
