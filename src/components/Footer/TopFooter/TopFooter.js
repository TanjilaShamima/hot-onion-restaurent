import React from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import logo from '../../../logo.png'

const TopFooter = () => {
    return (
        <Container>
            <Row className="d-flex justify-content-center align-content-center">
                <Col className="d-flex  align-content-bottom" md="8" sm="12">
                    <img style={{height: '30px', width: '150px', marginTop: '60px'}} src={logo} alt=""/>
                </Col>
                <Col md="4" sm="12">
                    <Row>
                        <Col md="6">
                            <Nav className="footer-nav">
                                <Nav.Link>About Our Food</Nav.Link>
                                <Nav.Link>About Our Food</Nav.Link>
                                <Nav.Link>About Our Food</Nav.Link>
                                <Nav.Link>About Our Food</Nav.Link>
                            </Nav>
                        </Col>
                        <Col md="6">
                            <Nav className="footer-nav">
                                <Nav.Link>About Our Food</Nav.Link>
                                <Nav.Link>About Our Food</Nav.Link>
                                <Nav.Link>About Our Food</Nav.Link>
                                <Nav.Link>About Our Food</Nav.Link>
                            </Nav>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>       
    );
};

export default TopFooter;