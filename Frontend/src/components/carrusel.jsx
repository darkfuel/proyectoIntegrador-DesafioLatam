// En '../components/carrusel.jsx'
import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import ExampleCarouselImage from '../../public/img/bicicleta-1.jpg'

export const CarruselUno = () => (
  <Carousel>
    <Carousel.Item>
      <img
        className='d-block w-100'
        src={ExampleCarouselImage}
        alt='Second slide'
      />
      <Carousel.Caption>
        <h3>Primera imagen</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className='d-block w-100'
        src={ExampleCarouselImage}
        alt='Second slide'
      />
      <Carousel.Caption>
        <h3>Segunda imagen</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className='d-block w-100'
        src={ExampleCarouselImage}
        alt='Second slide'
      />
      <Carousel.Caption>
        <h3>Tercera imagen</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
)
