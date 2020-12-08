//import { Button } from 'bootstrap';
import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import logo from '../../logo.png'


const Header = () => {
    return (
        <Container>
            <Navbar>
                <Navbar.Brand href="#home">
                    <img width="100" src={logo} alt=""/>
                </Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link to="/home">Home</Nav.Link>
                    <Nav.Link to="/food">Food</Nav.Link>
                </Nav>
                <Form inline>
                    <Button style={{color:'black'}} variant="link">Login</Button>
                    <Button style={{borderRadius:'20px'}} variant="danger">Sign Up</Button>
                </Form>
            </Navbar>
            
        </Container>
    );
};

export default Header;