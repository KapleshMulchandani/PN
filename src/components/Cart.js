// Cart.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../redux/actions';
import CartItem from './CartItem';

const Cart = () => {
    const cartItems = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const handleIncreaseQuantity = (id) => {
        const item = cartItems.find(item => item.id === id);
        if (item) {
            dispatch(updateQuantity(id, item.quantity + 1));
        }
    };

    const handleDecreaseQuantity = (id) => {
        const item = cartItems.find(item => item.id === id);
        if (item && item.quantity > 1) { // Prevent reducing below 1
            dispatch(updateQuantity(id, item.quantity - 1));
        }
    };

    const handleRemove = (id) => {
        dispatch(removeFromCart(id));
    };

    return (
        <div>
            <h2>Your Cart</h2>
            {cartItems.map(item => (
                <CartItem 
                    key={item.id} 
                    item={item} 
                    removeFromCart={() => handleRemove(item.id)} 
                    increaseQuantity={() => handleIncreaseQuantity(item.id)} 
                    decreaseQuantity={() => handleDecreaseQuantity(item.id)} 
                />
            ))}
            <h3>Total Cost: ${cartItems.reduce((total, item) => total + item.cost * item.quantity, 0).toFixed(2)}</h3>
        </div>
    );
};

export default Cart;
