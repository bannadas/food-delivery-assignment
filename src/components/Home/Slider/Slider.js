import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Slider.css'

const Slider = () => {
    return (
        <div className="container">
            <Carousel fade>
  <Carousel.Item>
    <img
      className=" slider-img d-block w-100"
      src="https://images.unsplash.com/photo-1608019528071-c1a5c53c738c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGVnZyUyMG9tbGV0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      alt="First slide"
    />
    <Carousel.Caption >
      <div className=" slider-text m-5 p-5">
      <h1>Order For Breakfast</h1>
      <p> voucher <button className="voucher-btn">NASTA45</button></p>
      <p>Available from 08.00 am to 11.oo pm</p>
      <button className="order-btn">Order</button>
      </div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className=" slider-img d-block w-100"
      src="https://images.unsplash.com/photo-1515669097368-22e68427d265?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmljZSUyMGFuZCUyMGZpc2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      alt="Second slide"
    />

    <Carousel.Caption className="slider-text m-5 p-5">
    <h1>Order For Lunch</h1>
      <p> voucher <button className="voucher-btn">LUNCH60</button></p>
      <p>Available from 12.00 pm to 06.oo pm</p>
      <button className="order-btn">Order</button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="slider-img d-block w-100"
      src="https://images.unsplash.com/photo-1614549099339-729737b3cfd9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fHJpY2UlMjBhbmQlMjBmaXNofGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      alt="Third slide"
    />

    <Carousel.Caption className="slider-text m-5 p-5">
    <h1>Order For Dinner</h1>
      <p> voucher <button className="voucher-btn">DINNER50</button></p>
      <p>Available from 6.00 Pm to 11.oo pm</p>
      <button className="order-btn">Order</button>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Slider;