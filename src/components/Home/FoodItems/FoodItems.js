import React, { useEffect, useState } from 'react';
import FoodItem from '../FoodItem/FoodItem';

import './FoodItems.css'

const FoodItems = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/items')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])






    return (
        <div id="food-items">
            <h2 className="text-center bold text-danger my-5">All items</h2>
            <div className=" container food-container">
                {
                    items.map(foodItem => <FoodItem key={foodItem._id} foodItem={foodItem}></FoodItem>)
                }
            </div>
        </div>
    );
};

export default FoodItems;