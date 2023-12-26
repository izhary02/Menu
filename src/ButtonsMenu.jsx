const ButtonsMenu = ({ categories, toggleCategory }) => {
  return (
    <div className="btn-container">
      {categories.map((category) => {
        return (
          <button
            key={category}
            type="button"
            className="btn"
            onClick={() => toggleCategory(category)}
          >
            {category}
          </button>
        )
      })}
    </div>
  )
}
export default ButtonsMenu
