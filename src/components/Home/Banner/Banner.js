import React from 'react';
import { FiPhoneCall } from "react-icons/fi";

import './Banner.css'



const Banner = () => {
    return (
        <div className="header-container ">
      <div className="">
        <div className="header">

          
         
            <h1 className="title pt-5">
             <span className="Aahar">Aahar</span> <br /> Food Delivery
            </h1>
            <h3 className="text-white text-center mt-3">
            Order food whenever you want!We are always ready to searve you.
            </h3>
            <form className="search-form">
                <input type="text" placeholder=" Restaurant Name" />
                <input type="text" placeholder="Food Name" />
                <button className="search-btn">search</button>
            </form>
            <h1 className="  text-white text-center mt-3"> <FiPhoneCall></FiPhoneCall>  <span className="number">90-500-28-999</span></h1>
          </div>
         
        </div>
      </div>
    );
};

export default Banner;