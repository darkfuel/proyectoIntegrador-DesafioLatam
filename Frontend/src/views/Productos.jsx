import React, { useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Row, Card, Button } from 'react-bootstrap'
import { ENDPOINT } from '../config/constantes.jsx'
import ProductoFiltro from '../components/ProductoFiltro.jsx'
import { ProductContext } from '../context/ProductContext.jsx'
import UserContext from '../context/UserContext.jsx'

const Productos = () => {
  const { addProduct, borrarProduct } = useContext(ProductContext)
  const navigate = useNavigate()
  const [filtro, setFiltro] = useState('')

  const [productos, setProductos] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/productos')
      .then(response => response.json())
      .then(data => {
        setProductos(data.rows || [])
      })
      .catch(error => console.error('Error fetching data:', error))
  }, [])

  const { getNuevoUsuario } = useContext(UserContext)


  const handleFiltroChange = (texto) => {
    setFiltro(texto)
  }

  const productosFiltrados = productos.filter(card =>
    card.nombre.toLowerCase().includes(filtro.toLowerCase()) ||
    card.descripcion.toLowerCase().includes(filtro.toLowerCase())
  )

  const edit = (id) => {
    if (getNuevoUsuario.is_admin) {
      return (
        <>
          <Button>editar</Button>
          <Button variant='danger' onClick={() => borrarProduct(card)}>borrar</Button>
        </>
      )
    }
  }

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
                <Card.Title>{card.nombre}</Card.Title>
                <hr />
                <Card.Text>{card.descripcion}</Card.Text>
                <Card.Text>Precio: {card.precio}</Card.Text>
                <Button variant='info' onClick={() => navigate(`${ENDPOINT.detalle}/${card.id}`)}>Ver Detalle</Button>
                <Button variant='secondary' onClick={() => addProduct(card)}>Agregar</Button>

                <div>{edit()}</div>

              </Card.Body>
            </Card>
          </Container>
        ))}
      </Row>
    </Container>
  )
}

export default Productos
