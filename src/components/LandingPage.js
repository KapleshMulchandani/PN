// LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css'; // Import the CSS for the landing page

const LandingPage = () => {
    return (
        <div className="landing-page">
            <div className="overlay">
                <h1>Paradise Nursery</h1>
                <p>
                    Welcome to Paradise Nursery, your one-stop destination for beautiful and healthy house plants. 
                    We offer a wide variety of plants to brighten up your home and improve your indoor air quality.
                </p>
                <Link to="/products">
                    <button className="get-started-btn">Get Started</button>
                </Link>
            </div>
        </div>
    );
};

export default LandingPage;
