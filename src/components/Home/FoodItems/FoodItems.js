import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

import './FoodItems.css'

const FoodItems = () => {
    const {user} = useAuth();
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
            <h2 className="text-primary mt-5">All items</h2>
            <div className=" container food-container">
               {
                items.map((item,index) => <div className=" card pb-3" key={item._id}>
                <img src={item.image} alt="" />
                <h3>{item.name}</h3>
               
                <p className="px-3">{item.description}</p>



                <button onClick={()=>handleDelete(item._id)} className="btn btn-danger">Delete</button>

                   
                       
                   
                    <button onClick={()=>handleAddToCart(index)} className="btn btn-warning">Buy now</button>
               
            </div>)
                }
            </div>
        </div>
    );
};

export default FoodItems;