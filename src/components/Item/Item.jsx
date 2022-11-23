import { memo } from "react"
import { Card, Col, Container, Row } from "react-bootstrap"
import { Link } from 'react-router-dom'

const Item = memo(({ product }) => {
    return (
      <Container fluid key={product.id}  className='card col-12 col-md-4 mb-5 d-flex '>
      <Link to= {`/detail/${product.id}`}>
          
                      <center>
                      <Card.Title className='card-header'>
                      Nombre: {product.name}
                      </Card.Title>
                      </center>
                      <Card bg={'Info'.toLowerCase()} className='card-body'>
                      <center>
                      <Card.Img className='w-50' variant="top" src={product.img} />
                      </center>
                      </Card>
                      <Card.Body>
                      <center>
                      <Card.Text>
                      Categoria: {product.description}
                      </Card.Text>
                      </center>
                      <center>
                      <Card.Text className='card-footer'>
                      Precio: {product.price}
                      </Card.Text>
                      </center>
                      </Card.Body>      
           
      </Link>
  </Container>
    
    )
  }
)


export default Item