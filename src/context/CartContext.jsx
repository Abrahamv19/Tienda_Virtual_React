import { createContext, useState, useContext } from "react";

const CartContext = createContext([])
export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({children}) => {
const [cartList, setCartList] = useState([])

const agregarAlCarrito = (products, nuevaCantidad) => {
    const { cantidad = 0 } = cartList.find(prod => prod.id === products.id) || {}
    const newCart = cartList.filter(prod => prod.id !== products.id)
    setCartList([...newCart, {...products, cantidad: cantidad + nuevaCantidad } ] ) 
}

const cartDeleted = () => {
    setCartList([])
}

const isInCart = (id) => cartList.find(product => product.id === id) ? true : false

const removeProduct = (id) => {
    setCartList(cartList.filter(product => product.id !== id))
}

const totalPrice = () => {
    return cartList.reduce((prev, act) => prev + act.cantidad * act.price, 0)   
}

const totalProducts = () => cartList.reduce((acumulador, productoActual) => acumulador + productoActual.cantidad, 0)

    return(
    <CartContext.Provider value={{
       cartList,
       agregarAlCarrito, 
       cartDeleted,
       isInCart,
       removeProduct,
       totalPrice,
       totalProducts
    }}>
        {children}
    </CartContext.Provider>

    )
}

export default CartContextProvider

