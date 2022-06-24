import { CATEGORIES } from '../../constants'

type CategoriesProps = {
  value: number
  onChangeCategory: (id: number) => void
}

const Categories: React.FC<CategoriesProps> = ({ value, onChangeCategory }) => {
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

export default Categories
