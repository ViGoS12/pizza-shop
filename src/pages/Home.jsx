import React, { createContext, useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setCategoryId } from '../redux/slices/filterSlice'

import Categories from '../components/categories/Categories'
import Sort from '../components/sort/Sort'
import Skeleton from './../components/PizzaBlock/Skeleton'
import PizzaBlock from './../components/PizzaBlock'
import AppLayout from '../layouts/AppLayout'

export const SearchContext = createContext('')

export default function Home() {
  const dispatch = useDispatch()
  const categoryId = useSelector((state) => state.filter.categoryId)

  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [sortType, setSortType] = useState({
    name: 'популярности',
    sortProperty: 'rating',
  })
  const [searchValue, setSearchValue] = useState('')

  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id))
  }

  useEffect(() => {
    const sortBy = sortType.sortProperty.replace('-', '')
    const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc'
    const category = categoryId > 0 ? `category=${categoryId}` : ''
    const search = searchValue ? `&search=${searchValue}` : ''

    setIsLoading(true)

    fetch(
      `https://62adae8c402135c7acc4f3b7.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}${search}`
    )
      .then((res) => res.json())
      .then((array) => {
        setItems(array)
        setIsLoading(false)
      })
    window.scrollTo(0, 0)
  }, [categoryId, sortType, searchValue])

  return (
    <SearchContext.Provider value={{ searchValue, setSearchValue }}>
      <AppLayout>
        <div className='container'>
          <div className='content__top'>
            <Categories
              value={categoryId}
              onChangeCategory={onChangeCategory}
            />
            <Sort value={sortType} onChangeSort={(id) => setSortType(id)} />
          </div>
          <h2 className='content__title'>Все пиццы</h2>
          <div className='content__items'>
            {isLoading
              ? [...new Array(8)].map((_, i) => <Skeleton key={i} />)
              : items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
          </div>
        </div>
      </AppLayout>
    </SearchContext.Provider>
  )
}
