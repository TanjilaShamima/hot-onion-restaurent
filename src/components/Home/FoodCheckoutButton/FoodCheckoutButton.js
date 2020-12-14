import React from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

const FoodCheckoutButton = ({cart}) => {
    const history = useHistory();
    const handleCheckout =() => {
        history.push('/order-manage');
    }
    return (

            <div className="text-center">
                {cart.length>0 ?
                <Button onClick={handleCheckout} variant="danger">Checkout Your Food</Button> 
                :
                <Button variant="secondary" disabled>Checkout Your Food</Button> }
            </div>

    );
};

const mapStateToProps = state => {
    return{
        cart : state.cart
    }
}


export default connect(mapStateToProps)(FoodCheckoutButton);