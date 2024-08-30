// En '../components/carrusel.jsx'
import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

export const CarruselUno = () => (
  <Carousel>
    <Carousel.Item>
      <img
        className='d-block w-100'
        src='https://montenbaik.com/wp-content/uploads/2018/03/161_jonathajunge__3569.jpg'
        alt='first slide'
      />
      <Carousel.Caption>
        <h3>SHOW ROOM</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className='d-block w-100'
        src='https://montenbaik.com/wp-content/uploads/2018/03/163_jonathajunge__3572.jpg'
        alt='Second slide'
      />
      <Carousel.Caption>
        <h3>VESTIMENTA</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className='d-block w-100'
        src='https://montenbaik.com/wp-content/uploads/2018/03/162_jonathajunge__3570-1.jpg'
        alt='third slide'
      />
      <Carousel.Caption>
        <h3>VARIEDAD</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
)
