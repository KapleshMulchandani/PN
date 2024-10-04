// CartItem.js
import React from 'react';

const CartItem = ({ item, increaseQuantity, decreaseQuantity, removeFromCart }) => {
    return (
        <div className="cart-item">
            <img src={item.image} alt={item.name} />
            <h4>{item.name}</h4>
            <p>Price: ${item.cost}</p>
            <p>Quantity: {item.quantity}</p>
            <button onClick={decreaseQuantity}>-</button>
            <button onClick={increaseQuantity}>+</button>
            <button onClick={removeFromCart}>Remove</button>
            <p>Subtotal: ${(item.cost * item.quantity).toFixed(2)}</p>
        </div>
    );
};

export default CartItem;
