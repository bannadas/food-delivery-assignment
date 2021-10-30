import React from 'react';
import NavigationBar from '../NavigationBar/NavigationBar';
import FoodItems from './FoodItems/FoodItems';

import './Home.css'

const Home = () => {
    return (
        <div>
           <NavigationBar></NavigationBar>
            
            <FoodItems></FoodItems>
        </div>
    );
};

export default Home;