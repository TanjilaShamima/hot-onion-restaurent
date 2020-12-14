import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { fakeFoodIteams } from '../../../fakeData/fakeFoodIteams';
import { addToCart } from '../../../Redux/actions/restaurentManageAction';
import SingleFoodBottom from '../SingleFoodBottom/SingleFoodBottom';
import SingleFoodTop from '../SingleFoodTop/SingleFoodTop';
import { connect } from 'react-redux';

const SingleFoodIndex = (props) => {
    const {cart, addToCart} = props;
    //console.log(props)
    
    const {foodId} = useParams();

    const selectedFood = fakeFoodIteams.find(item => item.foodId == foodId);
    
    const remainingFood = fakeFoodIteams.filter(food => food.category === selectedFood.category && food.foodId != foodId);
    // console.log(selectedFood);

    return (
        <Container  style={{marginTop: '40px', overflow : 'hidden'}}>
            <div style={{marginBottom : '100px'}}>
                <SingleFoodTop
                 selectedFood={selectedFood}
                 addToCart={addToCart}
                 ></SingleFoodTop>
            </div>
               
            <div className="d-flex flex-wrap justify-content-around mt-3 mb-3">
                <h3 style={{marginBottom : '30px'}} variant="xxLarge" className="text-center">Product in Same Category</h3>                   
                
                <SingleFoodBottom  food={remainingFood}></SingleFoodBottom>)
                

            </div>
        </Container>
    );
};

const mapStateToProps = state =>{
    return{
        cart: state.cart
    }
}

const mapDispatchToProps = {
    addToCart : addToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleFoodIndex);