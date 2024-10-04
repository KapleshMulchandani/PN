// src/redux/store.js
import { createStore, combineReducers } from 'redux';
import cartReducer from './cartReducer'; // Make sure the path is correct

const rootReducer = combineReducers({
    cart: cartReducer, // Ensure cartReducer is a function
    // Add other reducers here if necessary
});

const store = createStore(rootReducer);

export default store;
