import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fakeFoodIteams } from '../../../fakeData/fakeFoodIteams';
import { addToCart } from '../../../Redux/actions/restaurentManageAction';
import OrderItemCart from '../OrderItemCart/OrderItemCart';
import OrderItems from '../OrderItems/OrderItems';

const DeliveryItems = ({cart, addToCart}) => {
 
    
    console.log(cart);
    return (
        <section className="float-right" style={{width : '80%'}}>
            <p>From <strong>Best Onion Pizza House</strong> 
            <br/>Arriving in 20-30 minutes 
            <br/>107 Rd No 8</p>
            <div>
                {
                    cart.map(orderItem => <OrderItems addToCart={addToCart} key={orderItem.foodId} orderItem={orderItem}></OrderItems>)
                }
                
            </div>
            <div>
                <OrderItemCart></OrderItemCart>
            </div>
        </section>
    );
};

const mapStateToProps = state =>{
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = {
    addToCart : addToCart
}



export default connect(mapStateToProps, mapDispatchToProps)(DeliveryItems);