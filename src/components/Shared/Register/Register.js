import React from 'react';
import './Register.css'
import logo from '../../../logo.png'
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Register = () => {
    // const handleSubmit = () => {
        

    // }
    return (
        <div className="register text-center">
            <img style={{marginTop : '50px'}} width="200px" src={logo} alt=""/>
            <Form className="register-form">
                <Form.Group controlId="formBasicName">
                    <Form.Control type="text" placeholder="Name"  required/>
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Email" required/>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" required/>
                </Form.Group>

                <Form.Group controlId="formConfirmPassword">
                    <Form.Control type="password" placeholder="Confirm Password" required/>
                </Form.Group>
                <Button style={{width:'100%'}} variant="danger" type="submit">
                    Register Now
                </Button>
                <p>Already Have an Account?<Link to="/login"> Log In</Link></p>
            </Form>
        </div>
    );
};

export default Register;