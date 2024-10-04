// actions.js
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const UPDATE_QUANTITY = 'UPDATE_QUANTITY';

// actions.js
export const addToCart = (item) => ({
    type: 'ADD_TO_CART',
    payload: {
      id: item.id,
      name: item.name,
      cost: item.cost,
      quantity: 1,
      image: item.image
    }
  });

// actions.js
export const updateQuantity = (id, quantity) => ({
  type: 'UPDATE_QUANTITY',
  payload: { id, quantity },
});

// Example of removing an item from cart
export const removeFromCart = (id) => ({
  type: 'REMOVE_FROM_CART',
  payload: id,
});

