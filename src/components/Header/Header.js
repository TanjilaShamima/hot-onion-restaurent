//import { Button } from 'bootstrap';
import React from 'react';
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
    return (
        <Container>
            <Navbar>
                <Navbar.Brand to="/home">
                    <Link to="/"><img width="140" src={logo} alt=""/></Link>
                </Navbar.Brand>
                <Nav  className="mr-auto">
                    <Link style={{padding: '0px 5px'}} to="/home">Home</Link>
                    <Link style={{padding: '0px 5px'}} to="/food">Food</Link>
                </Nav>
                <Form inline>
                    <Button variant="link"><FontAwesomeIcon className="bg-light text-danger" icon={faShoppingCart} /></Button>
                    <Button style={{color:'black'}} variant="link"><Link to="/login">Login</Link></Button>
                    <Button style={{borderRadius:'20px'}} variant="danger"><Link className="text-light" to="/signup">Sign Up</Link></Button>
                </Form>
            </Navbar>
            
        </Container>
    );
};

export default Header;