import React from 'react'
import styles from './Search.module.scss'
import clearIcon from '../../assets/svg/clear-icon.svg'
import searchIcon from '../../assets/svg/search-icon.svg'

export default function Search({ searchValue, setSearchValue }) {
  return (
    <div className={styles.root}>
      <img src={searchIcon} alt='search' className={styles.searchIcon} />
      <input
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        className={styles.input}
        placeholder='Поиск...'
      />
      {searchValue && (
        <img
          onClick={() => setSearchValue('')}
          src={clearIcon}
          alt='clear'
          className={styles.clearIcon}
        />
      )}
    </div>
  )
}
