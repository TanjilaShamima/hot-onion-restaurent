import { ADD_TO_CART, ADD_USER, REMOVE_FROM_CART } from "../actions/restaurentManageAction";

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
            // console.log(action.food)
            const newCarts = [...state.cart, action.food]
            return{...state, cart : newCarts}
        case REMOVE_FROM_CART:
            const newCart = state.cart.filter(cart => cart.foodId !== action.id)
            return{...state, cart: newCart}
        default:
            return state;

        
    }
}