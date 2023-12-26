import { useState } from 'react'
import data from './data'
import ButtonsMenu from './ButtonsMenu'
import Menu from './Menu'
import Title from './Title'

const allCategories = ['all', ...new Set(data.map((item) => item.category))]

const App = () => {
  const [foodToDisplay, setFoodToDisplay] = useState(data)
  const [categories, setCategories] = useState(allCategories)

  const toggleCategory = (newCategory) => {
    newCategory === 'all'
      ? setFoodToDisplay(data)
      : setFoodToDisplay(data.filter((d) => d.category === newCategory))
  }

  return (
    <main>
      <section className="menu">
        <Title text={'our menu'} />
        <ButtonsMenu categories={categories} toggleCategory={toggleCategory} />
        <Menu foodToDisplay={foodToDisplay} />
      </section>
    </main>
  )
}
export default App
