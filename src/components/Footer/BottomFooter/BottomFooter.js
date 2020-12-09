import React from 'react';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';

const BottomFooter = () => {
    return (
        <Container>
            <Row>
                <Col md="8" sm="12">
                    <p><small>Copyright @ tanjilashamima</small></p>
                </Col>
                <Col md="4" sm="12">
                <Navbar>
                    <Nav style={{color : 'white'}} className="mr-auto footer-nav">
                        <Nav.Link to="/">Privacy Policy</Nav.Link>
                        <Nav.Link to="/">Term and Use</Nav.Link>
                        <Nav.Link to="/">Pricing</Nav.Link>
                    </Nav>
                </Navbar>
                </Col>
            </Row>
        </Container> 
    );
};

export default BottomFooter;