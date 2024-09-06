import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Context from '../context/UserContext.jsx'
import { Container, Row, Card, Button } from 'react-bootstrap/'
import { ENDPOINT } from '../config/constantes.jsx'
import cardData from '../../public/product.json'
import ProductoFiltro from '../components/ProductoFiltro.jsx'
import { ProductContext } from '../context/ProductContext.jsx'

const Productos = () => {
  const { addProduct } = useContext(ProductContext)
  const navigate = useNavigate()
  const [filtro, setFiltro] = useState('')

  const handleFiltroChange = (texto) => {
    setFiltro(texto)
  }

  const productosFiltrados = cardData.filter(card =>
    card.title.toLowerCase().includes(filtro.toLowerCase()) ||
    card.descripción.toLowerCase().includes(filtro.toLowerCase())
  )

  return (
    <Container fluid className='mb-5'>
      <Row className='fluid text-center mt-2 mb-2 justify-content-center'>
        <h1>- BICICLETAS -</h1>
      </Row>
      <ProductoFiltro onFiltroChange={handleFiltroChange} />
      <Row>
        {productosFiltrados.map(card => (
          <Container className='col-md-3 p-3' key={card.id}>
            <Card>
              <Card.Img variant='top' className='img-fluid' src={card.img} />
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <hr />
                <Card.Text>{card.descripción}</Card.Text>
                <Card.Text>Precio: {card.price}</Card.Text>
                <Button variant='info' onClick={() => navigate(`${ENDPOINT.detalle}/${card.id}`)}>Ver Detalle</Button>
                <Button variant='secondary' onClick={() => addProduct(card)}>Agregar</Button>
              </Card.Body>
            </Card>
          </Container>
        ))}
      </Row>
    </Container>
  )
}

export default Productos
