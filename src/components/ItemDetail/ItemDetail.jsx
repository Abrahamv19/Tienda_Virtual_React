
import { Card } from 'react-bootstrap'
import Contador from '../Contador/Contador'


const ItemDetail = ({ product }) => {
  const onAdd = (cantidad) => {
    console.log(cantidad)
  }
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
    <Contador stock={10} initial={1} onAdd={onAdd}/>
    </div>
    </Card>
  </center>
  )
}

export default ItemDetail