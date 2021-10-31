import React, { useEffect, useState } from 'react';
import useFirebase from '../../hooks/useFirebase';



import NavigationBar from '../NavigationBar/NavigationBar';


const MyOrders = () => {
  
    const email = 'banna.das2020@gmail.com';
    const [orders,setOrders] = useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/myOrders/${email}`)
        .then(res => res.json())
        .then(data => setOrders(data))
    },[])
    console.log(orders);
    return (
        <div>
            <NavigationBar></NavigationBar>
            <h1>My orders {orders.length}</h1>
            <div>
                <div>
                    {orders?.map((order,index) =>(
                        <div className="col-md-6 col-lg-4">
                            <div className="borderborder p-2 m-2">
                            <img src={order.image} alt="" />
                            <h4>{order.name}</h4>
                            
                            <h4>{order.description}</h4>
                            </div>

                        </div>
                    ))}
                    
                </div>
            </div>
        </div>
    );
};

export default MyOrders;