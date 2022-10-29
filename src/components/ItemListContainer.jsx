import "../Style/style.css"

const ItemListContainer = ({greeting}) => {
  return (
    <div>
      <h2 className="saludo">{greeting}</h2>
    </div>
  )
}

export default ItemListContainer