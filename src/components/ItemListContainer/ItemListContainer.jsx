import "../ItemListContainer/ItemListContainer.css"

import { useEffect } from 'react'
import { useState } from 'react'
import { gFetch } from '../../utilities/gFetch'
import { useParams } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import ItemList from "../ItemList/ItemList"

const ItemListContainer = (obj) => {


  const [products, setProducts] = useState([])
  const [loading, setLoading]= useState(true)
  const [bool, setBool]= useState(true)
  const {categoriaId} = useParams()


  useEffect(() => {
    if (categoriaId) {
       gFetch()
      .then(resp => setProducts(resp.filter(prod => prod.description === categoriaId)))
      .catch(err => console.log(err))
      .finally(() => setLoading(false)) 
    }else{  
      gFetch()
      .then(resp => setProducts(resp))
      .catch(err => console.log(err))
      .finally(() => setLoading(false)) 
    }
  
  }, [categoriaId]) 


  console.log(categoriaId)

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




