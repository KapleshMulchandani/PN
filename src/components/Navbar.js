// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/cart">
                Cart
                <img 
                    src="https://cdn-icons-png.flaticon.com/512/1413/1413908.png" 
                    alt="Cart Icon" 
                    style={{ width: '20px', marginLeft: '5px' }} // Optional styling
                />
            </Link>
        </nav>
    );
};

export default Navbar;
