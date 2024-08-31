import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Context from '../context/Context.jsx'
import { Container, Row, Card, Button } from 'react-bootstrap/'
import { ENDPOINT } from '../config/constantes.jsx'
import cardData from '../../public/product.json'

const Productos = () => {
  const { addProduct } = useContext(Context)
  const navigate = useNavigate()
  return (
    <Container fluid className=' mb-5'>
      <Row className='fluid text-center mt-2 mb-2 justify-content-center'><h1>- BICICLETAS -</h1></Row>
      <Row>
        {cardData.map(card => (
          <Container className='col-md-3 p-3' key={card.id}>
            <Card key={card.id}>
              <Card.Img variant='top' class='img-fluid' src={card.img} />
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <hr />
                <Card.Text>
                  {card.descripción}
                </Card.Text>
                <Card.Text>
                  Precio:  {card.price}
                </Card.Text>
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
