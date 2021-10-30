import React, { useEffect, useState } from 'react';
import FoodItem from '../FoodItem/FoodItem';
import './FoodItems.css'

const FoodItems = () => {
    const [items,setItems] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/items')
        .then(res => res.json())
        .then(data => setItems(data))
    },[])
    return (
        <div id="food-items">
            <h2 className="text-primary mt-5">All items</h2>
            <div className=" container food-container">
               {
                items.map(item => <FoodItem key={item.id} item={item}></FoodItem>)
                }
            </div>
        </div>
    );
};

export default FoodItems;