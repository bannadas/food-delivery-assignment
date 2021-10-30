import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FoodItem from '../FoodItem/FoodItem';
import './FoodItems.css'

const FoodItems = () => {
    const [items,setItems] = useState([]);
    const [isDeleted,setIsdeleted] = useState(null);
    useEffect(()=>{
        fetch('http://localhost:5000/items')
        .then(res => res.json())
        .then(data => setItems(data))
    },[isDeleted])


    const handleDelete = (id) =>{
        fetch(`http://localhost:5000/deleteItem/${id}`,{
            method:"DELETE",
            headers:{'content-type':'application/json'},
        })
        .then(res => res.json())
        .then(result => {
            if(result.deleteCount){
                setIsdeleted(true);
            }
            else{
                setIsdeleted(false);
            }
        });
            console.log(id);
    }
    return (
        <div id="food-items">
            <h2 className="text-primary mt-5">All items</h2>
            <div className=" container food-container">
               {
                items.map(item => <div className=" card pb-3">
                <img src={item.image} alt="" />
                <h3>{item.name}</h3>
               
                <p className="px-3">{item.description}</p>



                <button onClick={()=>handleDelete(item._id)} className="btn btn-danger">Delete</button>


                    <button className="btn btn-warning">order {item.name.toLowerCase()}</button>
               
            </div>)
                }
            </div>
        </div>
    );
};

export default FoodItems;