import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'
import {
  setCategoryId,
  setSortType,
  setFilters,
} from '../redux/slices/filterSlice'
import { fetchPizzas } from '../redux/slices/pizzaSlice'

import qs from 'qs'

import Categories from '../components/categories/Categories'
import Sort from '../components/sort/Sort'
import Skeleton from './../components/PizzaBlock/Skeleton'
import PizzaBlock from './../components/PizzaBlock'
import { sortList } from './../components/sort/Sort'

export default function Home() {
  const dispatch = useDispatch()
  const { categoryId, sort, searchValue } = useSelector((state) => state.filter)
  const { items, status } = useSelector((state) => state.pizza)
  const sortType = sort

  const navigate = useNavigate()

  const isSearch = useRef(false)
  const isMounted = useRef(false)

  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id))
  }

  const setSort = (id) => {
    dispatch(setSortType(id))
  }

  const getPizzas = async () => {
    const sortBy = sortType.sortProperty.replace('-', '')
    const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc'
    const category = categoryId > 0 ? `category=${categoryId}` : ''
    const search = searchValue ? `&search=${searchValue}` : ''

    dispatch(
      fetchPizzas({
        sortBy,
        order,
        category,
        search,
      })
    )
    window.scrollTo(0, 0)
  }

  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1))

      const sort = sortList.find(
        (obj) => obj.sortProperty === params.sortProperty
      )

      dispatch(
        setFilters({
          ...params,
          sort,
        })
      )
      isSearch.current = true
    }
  }, [])

  useEffect(() => {
    if (!isSearch.current) {
      getPizzas()
    }
    isSearch.current = false
  }, [categoryId, sortType, searchValue])

  useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        sortProperty: sort.sortProperty,
        categoryId,
      })
      navigate(`?${queryString}`)
    }
    isMounted.current = true
  }, [categoryId, sortType])

  return (
    <div className='container'>
      <div className='content__top'>
        <Categories value={categoryId} onChangeCategory={onChangeCategory} />
        <Sort value={sortType} onChangeSort={setSort} />
      </div>

      {status === 'error' ? (
        <div>
          <h2 className='content__error-info'>Произошла ошибка</h2>
        </div>
      ) : (
        <>
          <h2 className='content__title'>Все пиццы</h2>
          <div className='content__items'>
            {status === 'loading'
              ? [...new Array(4)].map((_, i) => <Skeleton key={i} />)
              : items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
          </div>
        </>
      )}
    </div>
  )
}
