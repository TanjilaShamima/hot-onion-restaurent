import React, { useState } from 'react';
import { Col, Row, Image, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

const OrderItems = ({orderItem, addToCart}) => {
    const{foodId, name, price, image, quantity} = orderItem;
    
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
                <Col md={3} className="d-flex align-content-right justify-content-around border rounded-pill">
                    <FontAwesomeIcon style={{marginTop : '10px'}} onClick={() => addToCart({...orderItem, quantity: -1})} icon={faMinus} />
                    <h4 variant="xxLarge">{quantity}</h4>
                    <FontAwesomeIcon style={{marginTop : '10px'}} onClick={() => addToCart({...orderItem, quantity: 1})} icon={faPlus} className="text-danger" />
                </Col>
            </Row>
        </section>
    );
};

export default OrderItems;