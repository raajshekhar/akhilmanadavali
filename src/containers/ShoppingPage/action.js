export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

export const addTodoCart = (productDetails = {}) => ({
    type: 'ADD_TO_CART',
    item: productDetails
});

export const removeFromCart = (productDetails = {}) => ({
    type: 'REMOVE_FROM_CART',
    item: productDetails
});