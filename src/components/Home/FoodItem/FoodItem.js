import React from 'react';
import { Link } from 'react-router-dom';
import './FoodItem.css'

const FoodItem = ({ foodItem }) => {
    const { _id, name, description, image } = foodItem;
    return (

        <div className=" card pb-3">
            <img src={image} alt="" />
            <h3>{name}</h3>

            <p className="px-3">{description}</p>
            <Link to={`/foodDtl/${_id}`}>
                <button className="btn btn-warning">order {name.toLowerCase()}</button>
            </Link>
        </div>

    );
};

export default FoodItem;