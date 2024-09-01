import { useContext, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Context from '../context/Context.jsx'
import { Container, Row, Col, Card, Button } from 'react-bootstrap/'
import { ENDPOINT } from '../config/constantes.jsx'

const Details = () => {
  const { id } = useParams()
  const { productos, addProduct, productDetails, setProductDetails } = useContext(Context)
  const navigate = useNavigate()
  console.log(productDetails, 'detalle')

  const getProduct = () => {
    const details = productos.find(item => item.id === id)
    setProductDetails(details)
  }

  useEffect(() => {
    getProduct()
  }, [])

  return (
    <Container fluid className=' mb-5, text-center'>
      <Row><Col className='text-center mt-2 mb-2'><h2>- MAYOR DETALLE - </h2></Col></Row>
      <Row>
        <div className='p-3'>
          <Card.Img variant='top' class='img-fluid' src={productDetails.img} />
          <Card.Body>
            <Card.Title>{productDetails.title}</Card.Title>
            <hr />
            <Card.Text>
              {productDetails.descripción2}
            </Card.Text>
            <Card.Text>
              Precio: <strong>{productDetails.price}</strong>
            </Card.Text>
            <Button variant='info' onClick={() => navigate(`${ENDPOINT.detalle}`)}>Volver</Button>
            <Button variant='secondary' onClick={() => addProduct(productDetails)}>Agregar</Button>
          </Card.Body>
        </div>
      </Row>
    </Container>
  )
}

export default Details
