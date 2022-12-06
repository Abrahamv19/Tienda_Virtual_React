
import { addDoc, collection, getFirestore } from "firebase/firestore"
import { useState } from "react"
import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"
import swal from "sweetalert"

const Carrito = () => {

  const [ dataForm, setDataForm] = useState({
    name: '',
    phone: '',
    email: ''
  })
  const { cartList, cartDeleted, removeProduct, totalPrice } = useCartContext()
  const handleSubmit = (evt) => {
    evt.preventDefault()
    let order = {}
    order.buyer = dataForm
    order.total = totalPrice()
    order.items = cartList.map(product => {
      return {
      id: product.id,
      name: product.name, 
      price: product.price
    }} )
    
    const db = getFirestore()
    const queryCollection = collection(db, 'orders')
    addDoc(queryCollection, order)
    .then(order => {
      const orderId =`Se ha generado de manera exitosa tu orden de compra con el ID: ${order.id}`
      
      swal({
        title: "¡Gracias por tu compra!",
        text: orderId,
        icon: "success",
      })

    })
    .catch(error => console.log(error))
    .finally(() => {
      setDataForm({
        name: '',
        phone: '',
        email: ''
      })
      cartDeleted()
    })    
  }

  const handleOnChange = (evt) => {
    console.log('nombre input:', evt.target.name) 
    console.log('valor input:', evt.target.value)
    setDataForm({
      ...dataForm,
      [evt.target.name]: evt.target.value
    })
  }
    console.log(dataForm)

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
                                  <button className="btn btn-outline-primary" onClick= { () => removeProduct (product.id) }>Eliminar producto</button>
                                  </div>
                                   </li> 
                                  
        )}
      
      </ul>
        
        <p>
          Total: {totalPrice()}
        </p>
       
      <button className="btn btn-outline-danger" onClick={cartDeleted}>Vaciar Carrito</button>

      <form onSubmit={handleSubmit}>
        <input type="text" name="name"        onChange={handleOnChange} value={dataForm.name} placeholder="Ingrese Nombre"/>
        <input type="text" name="email"       onChange={handleOnChange} value={dataForm.email} placeholder="Ingrese Email"/>
        <input type="text" name="repeatEmail" onChange={handleOnChange}                        placeholder="Repita Email"/>
        <input type="text" name="phone"       onChange={handleOnChange} value={dataForm.phone} placeholder="Ingrese Telefono"/>
      <button className="btn btn-outline-success">Generar orden</button>
      </form>
    </div>
  )
}

export default Carrito