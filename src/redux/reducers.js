// reducers.js
import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_QUANTITY } from './actions';

const initialState = {
    cart: [],
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return { ...state, cart: [...state.cart, { ...action.payload, quantity: 1 }] };
        case REMOVE_FROM_CART:
            return { ...state, cart: state.cart.filter(item => item.id !== action.payload) };
        case UPDATE_QUANTITY:
            return {
                ...state,
                cart: state.cart.map(item =>
                    item.id === action.payload.plantId
                        ? { ...item, quantity: action.payload.quantity }
                        : item
                ),
            };
        default:
            return state;
    }
};

export default cartReducer;
