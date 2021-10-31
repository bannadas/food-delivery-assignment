import React from 'react';

import './Banner.css'


const Banner = () => {
    return (
        <div>
            
            <div className="header ">
           
            <div className="banner  collapseOnSelect ">
            <div className="banner-text">
            <h1><span>AaHAR</span> <br/> Food delivery and service</h1>
            <p>Our mission is the foundation of all of our decisions.<br/> It guides what we do. It must be known, owned and energized by all.We will distinguish ourselves by our commitment to our values, <br/>promoting an environment.</p>
            <button className="get-appoinment-btn">Contact Us</button>
            </div>
             
            <img className="banner-image" src="https://o.remove.bg/downloads/16f5b441-15b3-424f-bdd1-3d0ee7e7d610/food-delivery-boy-driving-scooter-with-box-with-food-wearing-mask-removebg-preview.png" alt="" /> 
            
            </div>
            </div>
            
        </div>
    );
};

export default Banner;