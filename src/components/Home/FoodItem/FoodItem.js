import React from 'react';
import { Link } from 'react-router-dom';
import './FoodItem.css'

const FoodItem = ({ foodItem }) => {
    const { _id, name, description, image,price } = foodItem;
    return (

        <div className=" card pb-3">
            <img src={image} alt="" />
            <h3>{name}</h3>
            <h4> Price:{price} Tk</h4>

            <p className="px-3">{description}</p>
            <Link to={`/foodDtl/${_id}`}>

                <button className="order-btn">order {name.toLowerCase()}</button>
            </Link>
        </div>

    );
};

export default FoodItem;