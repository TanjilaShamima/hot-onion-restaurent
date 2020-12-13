import React from 'react';
import { Col, Row, Image, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

const OrderItems = ({orderItem}) => {
    const{foodId, name, price, image} = orderItem;
    
    return (
        <section style={{backgroundColor : '#8080802b', width : '100%', display : 'block'}} className="my-2 rounded">
            <Row className=" justify-content-center align-items-center px-2 py-1">
                <Col md={3}>
                    <Image width={100} height={100} src={image}  fluid/>
                </Col>
                <Col md={5}>
                    <p style={{marginBottom: '-1px'}}><small><strong>{name}</strong></small></p>
                    <h5 className="text-danger">${price}</h5>
                    <p className="text-muted"><small>Delivery Charge Free</small></p>
                </Col>
                <Col md={4} className="d-flex justify-content-around ">
                    <FontAwesomeIcon  icon={faMinus}/>
                    
                    <Form.Control  className="text-center font-weight-bold" value="1" />
                   
                    <FontAwesomeIcon className="text-danger" icon={faPlus}></FontAwesomeIcon>
                </Col>
            </Row>
        </section>
    );
};

export default OrderItems;