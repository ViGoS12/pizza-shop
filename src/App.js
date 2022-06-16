import './scss/app.scss'
import Header from './components/header/Header'
import Categories from './components/categories/Categories'
import Sort from './components/sort/Sort'
import PizzaBlock from './components/PizzaBlock'

function App() {
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
            <PizzaBlock title='Пеперони0' price={500} />
            <PizzaBlock title='Пеперони2' price={600} />
            <PizzaBlock title='Пеперони3' price={700} />

            <PizzaBlock />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
