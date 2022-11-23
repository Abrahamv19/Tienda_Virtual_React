
import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"

const Carrito = () => {

  const { cartList, borrarCarrito, removeProduct, totalPrice } = useCartContext()

  if(cartList.length === 0) {
    return (
      <>
      <p>No hay elementos en el carrito</p>
      <Link to='/'>Hacer compras</Link>
      </>
    )
  }

  return (
    <div>
      <h1>Carrito</h1>
      <ul>
        {cartList.map((product) => <li key={product.id}>
                                  <img src={product.img} className='w-20' />
                                  Nombre: {product.name} - Precio: {product.price} - Cantidad: {product.cantidad}
                                  <p>
                                    Subtotal: ${product.cantidad * product.price} 
                                  </p>
                                  <div>
                                  <button onClick= { () => removeProduct (product.id) }>Eliminar producto</button>
                                  </div>
                                   </li> 
                                  
        )}
      
      </ul>
        
        <p>
          Total: {totalPrice()}
        </p>
       
      <button onClick={borrarCarrito}>Vaciar Carrito</button>
    </div>
  )
}

export default Carrito