import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Container, Card, Button, Spinner } from 'react-bootstrap'

const DetalleProducto = () => {
  const { id } = useParams()
  const [producto, setProducto] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProducto = async () => {
      try {
        const response = await fetch(`http://localhost:3001/productos/${id}`)
        // Verificar el estado de la respuesta
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`)
        }

        // Convertir la respuesta a JSON
        const data = await response.json()

        // Log de datos recibidos para depuración
        console.log('Full Response Data:', data)

        // Verificar si `message.rows` está presente y tiene datos
        if (data.message && data.message.rows && Array.isArray(data.message.rows) && data.message.rows.length > 0) {
          const productoData = data.message.rows[0]
          setProducto(productoData)
        } else {
          throw new Error('Product data not found in response')
        }
      } catch (error) {
        console.error('Error fetching product details:', error)
        setError(error.message)
      } finally {
        setLoading(false)
      }
    };

    fetchProducto()
  }, [id])

  if (loading) {
    return (
      <Container fluid className='mt-5 text-center'>
        <Spinner animation='border' role='status'>
          <span className='visually-hidden'>Loading...</span>
        </Spinner>
      </Container>
    )
  }

  if (error) {
    return (
      <Container fluid className='mt-5'>
        <div>Error: {error}</div>
      </Container>
    )
  }

  if (!producto) {
    return (
      <Container fluid className='mt-5'>
        <div>Product not found</div>
      </Container>
    )
  }

  return (
    <Container fluid className='mt-5'>
      <Card>
        <Card.Img variant='top' src={producto.img || 'placeholder-image-url.jpg'} alt={producto.nombre} />
        <Card.Body>
          <Card.Title>{producto.nombre}</Card.Title>
          <Card.Text>{producto.descripcion}</Card.Text>
          <Card.Text>Precio: ${producto.precio}</Card.Text>
          <Button variant='primary'>Comprar</Button>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default DetalleProducto
