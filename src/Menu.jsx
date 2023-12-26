import Food from './Food'

const Menu = ({ foodToDisplay }) => {
  return (
    <div className="section-center">
      {foodToDisplay.map((food) => {
        return <Food key={food.id} {...food} />
      })}
    </div>
  )
}
export default Menu
