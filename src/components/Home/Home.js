import React from 'react';
import Footer from '../Footer/Footer';
import NavigationBar from '../NavigationBar/NavigationBar';
import Banner from './Banner/Banner';
import FoodItems from './FoodItems/FoodItems';

import './Home.css'
import Slider from './Slider/Slider';

const Home = () => {
    return (
        <div>
           
            <Banner></Banner>
            <Slider></Slider>
            <FoodItems></FoodItems>

       {/* why choose us */}

      
           
   
        
        <div className=" my-4 chose-us container  text-center">
         <h1 className="">Why Chose Us</h1> 
         <hr />   
         <div>
         <p>We offer you the best service in town.We have just three mision in our service.</p>
         <p><span className="mx-4">1.Ontime Delivery </span>
        <span className="mx-5">2. Free Delivery Cost </span><span className="mx-5">3. Best Quality Food</span></p>
        <button className="about-us-btn">About Us</button>
         
        
    

        
        <div className="my-4">
                  <h2>Contact Us</h2>
                <div className="contact-us-form">
                <input type="text" placeholder="your email" />
               
               <br />
               <input type="text" placeholder="your text" />
               <br />
               <button className="submit-btn">Submit</button>
                </div>
        </div>
        
         
    </div>
    </div>
      
      

           
        </div>
    );
};

export default Home;