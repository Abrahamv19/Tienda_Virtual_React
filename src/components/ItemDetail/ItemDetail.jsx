import { useState } from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'
import Contador from '../Contador/Contador'

const ItemDetail = ({ product }) => {

  const [isCounter, setIscounter] = useState(true)
  const {cartList, agregarAlCarrito} = useCartContext()
  const onAdd = (cantidad) => {
    console.log(cantidad)
   /*  agregarAlCarrito( { ...product, cantidad } ) */
   agregarAlCarrito(product, cantidad)
    setIscounter(false)
  }
  console.log(cartList)  

  return (
    <center>
      <Card className="border border-5 border-info container w-50" >
    <div className='row'> 
    <div className='col'>
<img src={product.img} className='w-25' />
<Card.Title>Nombre: {product.name}</Card.Title>
<p>Categoria: {product.description}</p>
<p>Precio: {product.price}</p>
<p>Stock: {product.stock}</p>
    </div>
    <div>
      {isCounter ?
       <Contador stock={10} initial={1} onAdd={onAdd}/>
       :
       <div className='container mb-2'>
       <Link to='/carrito' className='btn btn-primary'>Finalizar mi compra</Link>
       <Link to='/' className='btn btn-info'>Seguir comprando</Link>
       </div>
      }
    </div>
   
    </div>
    </Card>
  </center>
  )
}

export default ItemDetail