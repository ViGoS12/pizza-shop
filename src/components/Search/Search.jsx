import React, { useContext, useRef, useState } from 'react'
import styles from './Search.module.scss'
import debounce from 'lodash.debounce'
import clearIcon from '../../assets/svg/clear-icon.svg'
import searchIcon from '../../assets/svg/search-icon.svg'
import { SearchContext } from './../../pages/Home'
import { useCallback } from 'react'

export default function Search() {
  const [value, setValue] = useState('')
  const { searchValue, setSearchValue } = useContext(SearchContext)
  const inputRef = useRef()

  const updateSearchValue = useCallback(
    debounce((str) => {
      setSearchValue(str)
    }, 500),
    []
  )

  const onChangeInput = (event) => {
    setValue(event.target.value)
    updateSearchValue(event.target.value)
  }

  const onClickClear = () => {
    setValue('')
    setSearchValue('')
    inputRef.current.focus()
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
