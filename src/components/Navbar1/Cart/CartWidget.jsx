import { ImCart } from 'react-icons/Im';
import { useCartContext } from '../../../context/CartContext';


const CartWidget = () => {
const { totalProducts } = useCartContext()

  return (
    <>
            <ImCart size={42}/>
            <span>{totalProducts() || ''}</span>
    </>
  )
}
export default CartWidget