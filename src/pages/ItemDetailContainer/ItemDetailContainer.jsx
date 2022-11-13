import ItemDetail from "../../components/ItemDetail/ItemDetail"
import { useParams } from 'react-router-dom'
import { useEffect } from "react"
import { gFetch } from "../../utilities/gFetch"
import { useState } from "react"


const ItemDetailContainer = () => {
    //*llamada a la api para un producto en particular
    //guardar en un estado el producto que traigamos

    const [product, setProduct] = useState({})
    const [loading, setLoading]= useState(true)
    const {productId} = useParams()

    useEffect(() => {
     gFetch(productId) 
     .then(resp => setProduct(resp))
     .catch(err => console.log(err))
     .finally(() => setLoading(false))
    }, [])
    console.log(product)
  return (
    loading 
    ?  <h2>Cargando...</h2>
    :
    <div>
        <ItemDetail  product={product}/>
    </div>
  )
}

export default ItemDetailContainer