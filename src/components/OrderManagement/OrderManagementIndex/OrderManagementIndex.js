import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import DeliveryDetails from '../DeliveryDetails/DeliveryDetails';
import DeliveryItems from '../DeliveryIteams/DeliveryItems';

const OrderManagementIndex = () => {
    return (
        <Container  style={{marginTop : '60px', marginBottom : '50px'}} >
            <Row>
                <Col>
                    <DeliveryDetails></DeliveryDetails>
                </Col>
                <Col>
                    <DeliveryItems></DeliveryItems>
                </Col>
            </Row>          
        </Container>
    );
};

export default OrderManagementIndex;