import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

import './FoodItems.css'

const FoodItems = () => {
    const {user} = useAuth();
    const [items,setItems] = useState([]);
   
    useEffect(()=>{
        fetch('http://localhost:5000/items')
        .then(res => res.json())
        .then(data => setItems(data))
    },[])


    


    const handleAddToCart = (index) =>{
        const data = items[index];
        data.email = user?.email;
        console.log(data);
        fetch('http://localhost:5000/addOrder',{
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify(data),
        })


        // console.log(index);
        // console.log(items[index]);
    }
    return (
        <div id="food-items">
            <h2 className="text-center bold text-danger my-5">All items</h2>
            <div className=" container food-container">
               {
                items.map((item,index) => <div className=" card pb-3" key={item._id}>
                <img src={item.image} alt="" />
                <h3>{item.name}</h3>
               
                <p className="px-3">{item.description}</p>



                

                   
                       
                   
                    <button onClick={()=>handleAddToCart(index)} className="Add-to-cart-btn">Add To Cart</button>
               
            </div>)
                }
            </div>
        </div>
    );
};

export default FoodItems;