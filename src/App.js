// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import ProductListing from './components/ProductListing';
import Cart from './components/Cart';
import './App.css';

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                
                <Navbar />
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/products" element={<ProductListing />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
            </Router>
        </Provider>
    );
};

export default App;
