import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import NavigationBar from '../NavigationBar/NavigationBar';

const AddItem = () => {
    const { register, handleSubmit,reset } = useForm();

  const onSubmit = data => {
  
    console.log(data);
    axios.post('https://intense-brushlands-43738.herokuapp.com/items',data)
   .then(res => {
     if(res.data.insertedId){
       alert('added successfully');
       reset();
       
     }
   })
    
  }
  
     
      
    return (
        <div className="container my-4 p-3">

            
      <h1 className="mt-5 text-center text-danger">Add An Item</h1>
      <div className="login-box w-25 m-auto mt-5">
        <div className=" border border d-flex justify-content-center align-items-center">
          <div className="login-form">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                {...register("name")}
                placeholder="name"
                className="p-2 m-2 w-100"
              />
              <br />
             
              <input
                {...register("description")}
                placeholder="Description"
                className="p-2 m-2"
                className="p-2 m-2 w-100"
              />
              <br />
              <input
                {...register("Price")}
                placeholder="Price"
                className="p-2 m-2"
                className="p-2 m-2 w-100"
              />
              <br />
              <input
                {...register("image", { required: true })}
                placeholder="Image Link"
                className="p-2 m-2"
                className="p-2 m-2 w-100"
              />
              <br />


              
              <input type="submit" value="Add" className="btn btn-danger w-50" />
            </form>
          </div>
        </div>
      </div>
    </div>
    );
};


export default AddItem;