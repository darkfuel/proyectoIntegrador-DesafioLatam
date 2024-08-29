import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { CarruselUno } from '../components/carrusel.jsx';
import ProDestacados from '../components/Destacados.jsx';

import { AwardFill } from 'react-bootstrap-icons';
import { Backpack3 } from 'react-bootstrap-icons';
import { Bicycle } from 'react-bootstrap-icons';
import { ClockFill } from 'react-bootstrap-icons';

const Home = () => {

    return (
        <Container fluid>
            <CarruselUno />
            <Row className='pt-5'>
                <Col className='text-center'>
                    <AwardFill color="royalblue" size={96} />
                    <p className='mt-3'>Pedalea hacia el éxito, cada viaje es un logro.</p>
                </Col>
                <Col className='text-center'>
                    <Backpack3 color="royalblue" size={96} />
                    <p className='mt-3'>Donde el corazón se encuentra con la aventura, ahí está tu bicicleta ideal.</p>
                </Col>
                <Col className='text-center'>
                    <Bicycle  color="royalblue" size={96} />
                    <p className='mt-3'>Sube a la bicicleta de tus sueños y conquista el camino.</p>
                </Col>
                <Col className='text-center'>
                    <ClockFill color="royalblue" size={96} />
                    <p className='mt-3'>El mejor momento para montar es ahora. ¡Haz que cada segundo cuente!</p>
                </Col>

            </Row>
            <Row>
                <Col className='text-center mt-5 mb-5'>
                    <h1>Productos destacados</h1>
                </Col>
            </Row>
            <ProDestacados />
        </Container>
    );
};

export default Home;