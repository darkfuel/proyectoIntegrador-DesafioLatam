import { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Container, Card, Button } from 'react-bootstrap' // Spinner
import { ProductContext } from '../context/ProductContext'
// import React, { useEffect, useState } from 'react'

const DetalleProducto = () => {
  const { id } = useParams()
  const indice = Number(id)
  const navigate = useNavigate()
  const { productos, addProduct } = useContext(ProductContext)
  const details = productos.find((prod) => prod.id === indice)

  // useEffect(() => {
  //   getData()
  // }, [])

  // const [producto, setProducto] = useState(null)
  // const [loading, setLoading] = useState(true)
  // const [error, setError] = useState(null)

  // useEffect(() => {
  //   const fetchProducto = async () => {
  //     try {
  //       const response = await fetch(`http://localhost:3001/productos/${id}`)
  //       // Verificar el estado de la respuesta
  //       if (!response.ok) {
  //         throw new Error(`HTTP error! Status: ${response.status}`)
  //       }

  //       // Convertir la respuesta a JSON
  //       const data = await response.json()

  //       // Log de datos recibidos para depuración
  //       console.log('Full Response Data:', data)

  //       // Verificar si `message.rows` está presente y tiene datos
  //       if (data.message && data.message.rows && Array.isArray(data.message.rows) && data.message.rows.length > 0) {
  //         const productoData = data.message.rows[0]
  //         setProducto(productoData)
  //       } else {
  //         throw new Error('Product data not found in response')
  //       }
  //     } catch (error) {
  //       console.error('Error fetching product details:', error)
  //       setError(error.message)
  //     } finally {
  //       setLoading(false)
  //     }
  //   };

  //   fetchProducto()
  // }, [id])

  // if (loading) {
  //   return (
  //     <Container fluid className='mt-5 text-center'>
  //       <Spinner animation='border' role='status'>
  //         <span className='visually-hidden'>Loading...</span>
  //       </Spinner>
  //     </Container>
  //   )
  // }

  // if (error) {
  //   return (
  //     <Container fluid className='mt-5'>
  //       <div>Error: {error}</div>
  //     </Container>
  //   )
  // }

  if (!details) {
    return (
      <Container fluid className='mt-5'>
        <div>Product not found</div>
      </Container>
    )
  }

  return (
    <Container fluid className='mt-5'>
      <Card>
        <Card.Img variant='top' src={details.img || 'placeholder-image-url.jpg'} alt={details.nombre} />
        <Card.Body>
          <Card.Title>{details.nombre}</Card.Title>
          <Card.Text>{details.descripcion}</Card.Text>
          <Card.Text>Precio: ${details.precio}</Card.Text>
          <Button variant='secondary' className='m-4 col-md-1' onClick={() => addProduct(details)}>Agregar</Button>
          <Button variant='info' className='m-4 col-md-1' onClick={() => navigate('/productos')}>Volver</Button>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default DetalleProducto
