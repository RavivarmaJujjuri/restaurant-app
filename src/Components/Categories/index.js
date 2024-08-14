import './index.css'

const Categories = props => {
  const {categories, selectedCategory, setSelectedCategory} = props

  return (
    <ul className="category-list">
      {categories.map(each => (
        <li key={each.id}>
          <button
            type="button"
            onClick={event => {
              const filtered = categories.filter(
                category => category.category === event.target.textContent,
              )
              setSelectedCategory(filtered[0])
            }}
            className={
              selectedCategory.category === each.category
                ? 'category selected-category'
                : 'category'
            }
          >
            {each.category}
          </button>
        </li>
      ))}
    </ul>
  )
}
export default Categories
