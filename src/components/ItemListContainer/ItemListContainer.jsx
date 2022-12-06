import "../ItemListContainer/ItemListContainer.css"

import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import ItemList from "../ItemList/ItemList"
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore' 

const ItemListContainer = (obj) => {

  const [products, setProducts] = useState([])
  const [loading, setLoading]= useState(true)
  const {categoryId} = useParams()

  useEffect(() => {
     const dbFirestore = getFirestore()
     const queryCollection = collection(dbFirestore, 'items')
    if (categoryId) {
      let queryFilter = query(queryCollection, where('description', '==', categoryId))
      getDocs(queryFilter)
      .then((resp) => setProducts( resp.docs.map(doc => ({ id: doc.id, ...doc.data() })) ))
      .catch(err => console.log(err))
      .finally(() => setLoading(false)) 
    }else{  
      getDocs(queryCollection)
      .then((resp) => setProducts( resp.docs.map(doc => ({ id: doc.id, ...doc.data() })) ))
      .catch(err => console.log(err))
      .finally(() => setLoading(false)) 
    }
  
  }, [categoryId]) 

  return (
    loading 
    ?  <h2>Cargando...</h2>
    :
    <div>
<Container fluid>     
     { 
  <ItemList products={products}/>
   } 
</Container>
    </div>

  )
}

export default ItemListContainer




