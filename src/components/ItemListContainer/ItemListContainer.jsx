import "../ItemListContainer/ItemListContainer.css"

import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import ItemList from "../ItemList/ItemList"
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore' 

const ItemListContainer = (obj) => {

  const [products, setProducts] = useState([])
  const [loading, setLoading]= useState(true)
  const [bool, setBool]= useState(true)
  const {categoriaId} = useParams()

  useEffect(() => {
     const dbFirestore = getFirestore()
     const queryCollection = collection(dbFirestore, 'items')
    if (categoriaId) {
      //traer todos los productos de dbFirestore por filtro
      let queryFilter = query(queryCollection, where('description', '==', categoriaId))
      getDocs(queryFilter)
      .then((resp) => setProducts( resp.docs.map(doc => ({ id: doc.id, ...doc.data() })) ))
      .catch(err => console.log(err))
      .finally(() => setLoading(false)) 
    }else{  
      //traer todos los productos de dbFirestore sin filtro
      getDocs(queryCollection)
      .then((resp) => setProducts( resp.docs.map(doc => ({ id: doc.id, ...doc.data() })) ))
      .catch(err => console.log(err))
      .finally(() => setLoading(false)) 
    }
  
  }, [categoriaId]) 


  console.log(products)

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




