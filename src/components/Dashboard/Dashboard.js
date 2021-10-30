import React, { useEffect, useState } from 'react';



import NavigationBar from '../NavigationBar/NavigationBar';

const Dashboard = () => {
    // const {user} = useAuth();
    
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
            <h1>Dashboard {orders.length}</h1>
        </div>
    );
};

export default Dashboard;