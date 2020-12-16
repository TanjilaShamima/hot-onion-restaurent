import { ADD_TO_CART, ADD_USER, EMPTY_CART, REMOVE_FROM_CART } from "../actions/restaurentManageAction";

const initialState = {
    user : [],
    cart : []
}



export const restaurantReducer= (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER :
            // console.log(action)
            return{...state, user : action.user}
        case ADD_TO_CART:
            return{...state,
                cart : funcAddToCart(state.cart, action.food)
            
            }
        case REMOVE_FROM_CART:
            const newCart = state.cart.filter(cart => cart.foodId !== action.id)
            return{...state, cart: newCart}

        case EMPTY_CART:
            return {cart : []}
        default:
            return state;

        
    }
}


const funcAddToCart = (currentCart, newFood) =>{
    const matchFood = currentCart.find(food => food.foodId === newFood.foodId);
    if (matchFood) {
        const addedFood = currentCart.map(food =>
        food.foodId === newFood.foodId
            ? { ...newFood, quantity: food.quantity + newFood.quantity }
            : food
        );
        return addedFood;
    }  
    return [...currentCart, { ...newFood, quantity: newFood.quantity }];
}