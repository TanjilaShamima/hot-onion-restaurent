import React from 'react';
import logo from '../../../logo.png'
import { Form, Button } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';


const LogIn = () => {
    const history = useHistory();
    // const handleSubmit = () => {
        

    // }
    return (
        <div className="register text-center">
            <img style={{marginTop : '70px'}} width="200px" src={logo} alt=""/>
            <Form className="register-form">
                <Form.Group controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Email" required/>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" required/>
                </Form.Group>
                <Button style={{width:'100%'}} variant="danger" type="submit">
                    Log In
                </Button>
                <p>Create a New account?<Link to="/signup"> Click Here</Link></p>
            </Form>
        </div>
    );
};

export default LogIn;