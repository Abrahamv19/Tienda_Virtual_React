import ItemDetail from "../../components/ItemDetail/ItemDetail"
import { useParams } from 'react-router-dom'
import { useEffect, useState } from "react"
import { doc, getDoc, getFirestore } from 'firebase/firestore'


const ItemDetailContainer = () => {
    //*llamada a la api para un producto en particular
    //guardar en un estado el producto que traigamos

    const [product, setProduct] = useState({})
    const [loading, setLoading]= useState(true)
    const {productId} = useParams()

    useEffect(() => {
      //traer un producto de dbFirestore por productId
      const dbFirestore = getFirestore()
      const queryCollection = doc(dbFirestore, 'items', productId)
      getDoc(queryCollection)
      .then((doc) => setProduct( { id: doc.id, ...doc.data() } ))
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