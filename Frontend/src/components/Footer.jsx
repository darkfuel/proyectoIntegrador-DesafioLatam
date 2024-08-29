import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Whatsapp } from 'react-bootstrap-icons';
import { Facebook } from 'react-bootstrap-icons';
import { Instagram } from 'react-bootstrap-icons';
import { TwitterX } from 'react-bootstrap-icons';

const Footer = () => {

    const currentYear = new Date().getFullYear();

    return (
        <>
            <Container fluid className='footer'>
                    <Row>
                        <Col xs={8}><Whatsapp color="white" size={96} className='m-3'/></Col>
                        <Col xs={4}>
                        <Facebook color="white" size={96} className='ms-5' />
                        <Instagram color="white" size={96} className='ms-5'/>
                        <TwitterX color="white" size={96} className='ms-5'/>
                        </Col>
                    </Row>
                    <Row className='text-center mt-5 mb-5'>
                        <Col><p>Nosotros {currentYear} | Todos los derechos reservados.</p></Col>
                    </Row>
            </Container>

        </>
    );
};

export default Footer;