// cartReducer.js
const initialState = [];

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            // Check if the item already exists in the cart
            const existingItem = state.find(item => item.id === action.payload.id);
            if (existingItem) {
                return state.map(item =>
                    item.id === existingItem.id
                        ? { ...item, quantity: item.quantity + 1 } // Increment quantity
                        : item
                );
            }
            return [...state, { ...action.payload, quantity: 1 }]; // Add new item with quantity 1

        case 'UPDATE_QUANTITY':
            return state.map(item =>
                item.id === action.payload.id
                    ? { ...item, quantity: action.payload.quantity } // Update quantity
                    : item
            );

        case 'REMOVE_FROM_CART':
            return state.filter(item => item.id !== action.payload);

        default:
            return state;
    }
};

export default cartReducer;
