import React from 'react';
import { Button } from 'react-bootstrap';

const OrderItemCart = () => {
    return (
        <div style={{marginTop: '40px'}}>
            <p>Subtotal :</p>
            <p>Tax :</p>
            <p>Delivery Fee :</p>
            <p>Total :</p>
            <Button style={{width: '100%'}} variant="secondary" disabled>Place Your Order</Button>            
        </div>
    );
};

export default OrderItemCart;