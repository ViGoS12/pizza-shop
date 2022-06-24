import React, { useRef, useState } from 'react'
import styles from './Search.module.scss'

import debounce from 'lodash.debounce'

import clearIcon from '../../assets/svg/clear-icon.svg'
import searchIcon from '../../assets/svg/search-icon.svg'

import { setSearchValue } from '../../redux/slices/filterSlice'

import { useCallback } from 'react'
import { useDispatch } from 'react-redux'

export default function Search() {
  const dispatch = useDispatch()

  const [value, setValue] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  const updateSearchValue = useCallback(
    debounce((str) => {
      dispatch(setSearchValue(str))
    }, 500),
    []
  )

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
    updateSearchValue(event.target.value)
  }

  const onClickClear = () => {
    dispatch(setSearchValue(''))
    setValue('')
    inputRef.current?.focus()
  }

  return (
    <div className={styles.root}>
      <img src={searchIcon} alt='search' className={styles.searchIcon} />
      <input
        ref={inputRef}
        value={value}
        onChange={onChangeInput}
        className={styles.input}
        placeholder='Поиск...'
      />
      {value && (
        <img
          onClick={onClickClear}
          src={clearIcon}
          alt='clear'
          className={styles.clearIcon}
        />
      )}
    </div>
  )
}
