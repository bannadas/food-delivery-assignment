import React from 'react';
import './FoodItem.css'

const FoodItem = ({item}) => {
    const {name,description,image} = item;
    return (
        <div className="service pb-3">
            <img src={image} alt="" />
            <h3>{name}</h3>
           
            <p className="px-3">{description}</p>
            {/* <Link to={`/booking/${id}`}>
                <button className="btn btn-warning">Book {name.toLowerCase()}</button>
            </Link> */}
        </div>
    );
};

export default FoodItem;