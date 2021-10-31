import React from 'react';
import NavigationBar from '../NavigationBar/NavigationBar';
import Banner from './Banner/Banner';
import FoodItems from './FoodItems/FoodItems';

import './Home.css'

const Home = () => {
    return (
        <div>
           <NavigationBar></NavigationBar>
            <Banner></Banner>
            <FoodItems></FoodItems>
        </div>
    );
};

export default Home;