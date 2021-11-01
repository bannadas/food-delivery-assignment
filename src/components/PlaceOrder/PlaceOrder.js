import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import Footer from '../Footer/Footer';
import NavigationBar from '../NavigationBar/NavigationBar';

const PlaceOrder = () => {
    let { _id } = useParams();

    const [orderItems, setOrderItems] = useState([]);
    const [placeItem, setPlaceItem] = useState([]);

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        data.singleItem = placeItem;
        console.log(data);
        fetch('http://localhost:5000/orders', {
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
        fetch('http://localhost:5000/items')
            .then(res => res.json())
            .then(data => setOrderItems(data))
    }, [])

    useEffect(() => {
        const foundOrder = orderItems.find(orderDetail => orderDetail._id === _id);
        setPlaceItem(foundOrder);
    }, [orderItems])

    return (
        <div>
            <NavigationBar></NavigationBar>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-12">
                        <img src={placeItem?.image} alt="" />
                        <h1>{placeItem?.name}</h1>
                        <p>{placeItem?.description}</p>
                    </div>
                    <div className="col-lg-6 col-12">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input {...register("address")} placeholder="Your address" />
                            <input type="number" {...register("number")} placeholder="Your Number" />
                            <input type="submit" />
                        </form>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default PlaceOrder;