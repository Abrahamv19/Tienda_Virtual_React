import { useState } from "react"
import { Card } from "react-bootstrap"


const Contador = ({ initial=1, stock=100, onAdd }) => {

    const [cantidad, setCantidad] = useState(initial)

    const sumar = () => {
        if (cantidad < stock) {
            setCantidad(cantidad + 1)
        }
    }
    const restar = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1)
        }
    }

    const addCantidad = () => {
        onAdd(cantidad)
    }
  return (

    <div className="border border-1 border-info">
        <button className="btn btn-outline-info" onClick={restar}>-</button>
       <label>{cantidad}</label>
        <button className="btn btn-outline-info" onClick={sumar}>+</button>
        <br />
        <button className="btn btn-outline-info" onClick={addCantidad}>Agregar al carrito</button>
    </div>
   
  )
}

export default Contador

