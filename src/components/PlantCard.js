// PlantCard.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions';

const PlantCard = ({ plant }) => {
    const dispatch = useDispatch();

    return (
        <div className="plant-card">
            <img src={plant.image} alt={plant.name} />
            <h3>{plant.name}</h3>
            <p>${plant.cost}</p>
            <button onClick={() => dispatch(addToCart(plant))}>Add to Cart</button>
        </div>
    );
};

export default PlantCard;
