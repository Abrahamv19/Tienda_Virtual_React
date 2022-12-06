import carro from '../../../IMG/carros.png';
import { useCartContext } from '../../../context/CartContext';

const CartWidget = () => {
const { totalProducts } = useCartContext()

  return (
    <>
            <img src={carro} alt="" width={50}></img>
            <span>{totalProducts() || ''}</span>
    </>
  )
}
export default CartWidget