import React, { useState } from 'react'
import { CATEGORIES } from '../../constants'

export default function Categories({ value, onChangeCategory }) {
  return (
    <div className='categories'>
      <ul>
        {CATEGORIES.map((categoryName, i) => (
          <li
            key={i}
            onClick={() => onChangeCategory(i)}
            className={value === i ? 'active' : ''}>
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  )
}
