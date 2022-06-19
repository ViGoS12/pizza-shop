import React, { useEffect, useState } from 'react'

import Categories from '../components/categories/Categories'
import Sort from '../components/sort/Sort'
import Skeleton from './../components/PizzaBlock/Skeleton'
import PizzaBlock from './../components/PizzaBlock'
import AppLayout from '../layouts/AppLayout'

export default function Home() {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [CategoryId, setCategoryId] = useState(0)
  const [sortType, setSortType] = useState(0)

  useEffect(() => {
    setIsLoading(true)
    fetch(
      'https://62adae8c402135c7acc4f3b7.mockapi.io/items?category=' + CategoryId
    )
      .then((res) => res.json())
      .then((array) => {
        setItems(array)
        setIsLoading(false)
      })
    window.scrollTo(0, 0)
  }, [CategoryId])

  return (
    <AppLayout>
      <div className='container'>
        <div className='content__top'>
          <Categories
            value={CategoryId}
            onClickCategory={(id) => setCategoryId(id)}
          />
          <Sort sortValue={sortType} onChangeSort={(id) => setSortType(id)} />
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
