export const ADD_USER = 'ADD_USER';

export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';


export const addUserDetails = user =>{
    return{type: ADD_USER, user}
}

export const  addToCart = food =>{
    return{type: ADD_TO_CART, food}
}

export const removeFromCart = id =>{
    return{type: REMOVE_FROM_CART, id}
}