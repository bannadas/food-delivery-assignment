import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFirebase';



import NavigationBar from '../NavigationBar/NavigationBar';


const MyOrders = () => {
  const {user} = useAuth();
 
    const userEmail = user?.user?.email;
    const [myOrders,setMyOrders] = useState([]);
    useEffect(()=>{
        fetch(`https://intense-brushlands-43738.herokuapp.com/myorders/${userEmail}`)
        .then(res => res.json())
        .then(data => setMyOrders(data))
    },[userEmail])
    
    return (
        <div>
           
            <h1>My orders {MyOrders.length}</h1>
            <div>
                <div>
                    {myOrders.map(myOrder =>(
                        <div className="col-md-6 col-lg-4">
                            <div className="borderborder p-2 m-2">
                            <img src={myOrder.image} alt="" />
                            <h4>{myOrder.name}</h4>
                            
                            <h4>{myOrder.description}</h4>
                            </div>

                        </div>
                    ))}
                    
                </div>
            </div>
        </div>
    );
};

export default MyOrders;