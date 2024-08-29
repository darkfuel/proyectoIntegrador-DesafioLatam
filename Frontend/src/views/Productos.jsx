import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import cardData from '../../public/cardData.js'; // Ajusta la ruta según sea necesario

const Productos = () => {
    return (
        <Container fluid className=' mb-5'>
            <Row><Col className='text-center mt-2 mb-2'><h1>Productos</h1></Col></Row>
            <Row>
                {cardData.map(card => (
                    <>
                        <div className="col-md-3 p-3">
                            <Card key={card.id}>
                                <Card.Img variant="top" src={card.imgSrc} />
                                <Card.Body>
                                    <Card.Title>{card.title}</Card.Title>
                                    <Card.Text>
                                        {card.text}
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </>
                ))}
            </Row>

        </Container>
    );
};

export default Productos;
