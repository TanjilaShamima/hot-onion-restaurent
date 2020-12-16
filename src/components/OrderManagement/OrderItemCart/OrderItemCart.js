import React from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';

const OrderItemCart = ({cart}) => {

    let subTotal = 0;


    for(let i = 0; i < cart.length; i++) {
        subTotal = subTotal + (cart[i].quantity*cart[i].price);
    }

    const tax = subTotal * .1;
    const delivery = subTotal>50 ?  15 :  10;
    const total = subTotal + tax + delivery;

    return (
        <>
        <div className="d-flex pt-2 justify-content-between">
                <div className="text-left">
                    <h6>Subtotal: {cart.length} items</h6>
                    <h6>Tax:</h6>
                    <h6>Delivery fee:</h6>
                    <h2 variant="xLarge">Total:</h2>
                </div>
                <div className="text-right">
                    <h6>$ {subTotal.toFixed(2)}</h6>
                    <h6>$ {tax.toFixed(2)}</h6>
                    <h6>$ {delivery.toFixed(2)}</h6>
                    <h2 variant="xLarge">$ {+total.toFixed(2)}</h2>
                </div>
                <br/>
                
            </div>
            <Button style={{width : '100%'}} variant="danger">Place Your Order</Button>
        </>
    );
};

const mapStateToProps = state =>{
    return{
        cart: state.cart
    }
}


export default connect(mapStateToProps)(OrderItemCart);