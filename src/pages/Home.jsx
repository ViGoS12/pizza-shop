import React, { useEffect, useState } from 'react'

import Categories from '../components/categories/Categories'
import Sort from '../components/sort/Sort'
import Skeleton from './../components/PizzaBlock/Skeleton'
import PizzaBlock from './../components/PizzaBlock'
import AppLayout from '../layouts/AppLayout'

export default function Home() {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch('https://62adae8c402135c7acc4f3b7.mockapi.io/items')
      .then((res) => res.json())
      .then((array) => {
        setItems(array)
        setIsLoading(false)
      })
    window.scrollTo(0, 0)
  }, [])

  return (
    <AppLayout>
      <div className='container'>
        <div className='content__top'>
          <Categories />
          <Sort />
        </div>
        <h2 className='content__title'>Все пиццы</h2>
        <div className='content__items'>
          {isLoading
            ? [...new Array(8)].map((_, i) => <Skeleton key={i} />)
            : items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
        </div>
      </div>
    </AppLayout>
  )
}
