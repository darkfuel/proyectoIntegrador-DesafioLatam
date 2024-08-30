import React, { useContext } from 'react'
import Context from '../context/Context.jsx'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import cardData from '../../public/product.json'

const Productos = () => {
  const { addProduct } = useContext(Context)
  return (
    <Container fluid className=' mb-5'>
      <Row><Col className='text-center mt-2 mb-2'><h1>Bicicletas</h1></Col></Row>
      <Row>
        {cardData.map(card => (
          <div className='col-md-3 p-3' key={card.id}>
            <Card key={card.id}>
              <Card.Img variant='top' src={card.img} />
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <hr />
                <Card.Text>
                  {card.descripción}
                </Card.Text>
                <Card.Text>
                  Precio:  {card.price}
                </Card.Text>
                <Button variant='info'>Ver Detalle</Button>
                <Button variant='secondary' onClick={() => addProduct(card)}>Agregar</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </Row>

    </Container>
  )
}

export default Productos
