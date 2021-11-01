import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';

import './PlaceOrder.css'

const PlaceOrder = () => {
    let { _id } = useParams();
    const {user} = useAuth();

    const [orderItems, setOrderItems] = useState([]);
    const [placeItem, setPlaceItem] = useState([]);

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        data.singleItem = placeItem;
        console.log(data);
        fetch('https://intense-brushlands-43738.herokuapp.com/orders', {
            method: 'POST',
            headers: { 'content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                reset();
                alert('Order placed');
            })
    }

    useEffect(() => {
        fetch('https://intense-brushlands-43738.herokuapp.com/items')
            .then(res => res.json())
            .then(data => setOrderItems(data))
    }, [])

    useEffect(() => {
        const foundOrder = orderItems.find(orderDetail => orderDetail._id === _id);
        setPlaceItem(foundOrder);
    }, [orderItems])

    return (
        <div>
          
            <div className="container">
                <div className="row my-5">
                    <div className=" single-Item col-lg-6 col-12">
                        <img src={placeItem?.image} alt="" />
                       <h1>{placeItem?.name}</h1>
                       <h2> Price:{placeItem?.price}</h2>
                        <p>{placeItem?.description}</p>
                    </div>
                    <div className="col-lg-6 col-12">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input defaultValue={user.displayName} {...register("userName")} placeholder="Your name"  className="p-2 m-2"
                            className="p-2 m-2 w-100" />
                            <input defaultValue={user.email} {...register("userEmail")} placeholder="Your email"  className="p-2 m-2"
                            className="p-2 m-2 w-100"/>
                            <input {...register("address")} placeholder="Your address"  className="p-2 m-2"
                            className="p-2 m-2 w-100" />
                            <input type="number" {...register("number")} placeholder="Your Number"  className="p-2 m-2"
                            className="p-2 m-2 w-100" />
                            <button className="submit-btn">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
           
        </div>
    );
};

export default PlaceOrder;