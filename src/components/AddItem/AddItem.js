import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import NavigationBar from '../NavigationBar/NavigationBar';

const AddItem = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
  
    console.log(data);
    axios.post('http://localhost:5000/items',data)
   .then(res => {
     console.log(res);
   })
    
  }
  
     
      
    return (
        <div>

            <NavigationBar></NavigationBar>
      <h1 className="mt-5 text-center text-info">Add An Item</h1>
      <div className="login-box w-25 m-auto mt-5">
        <div className="event-box border border d-flex justify-content-center align-items-center">
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
                {...register("image", { required: true })}
                placeholder="Image Link"
                className="p-2 m-2"
                className="p-2 m-2 w-100"
              />
              <br />


              {errors.exampleRequired && <span>This field is required</span>}

              <input type="submit" value="Add" className="btn btn-info w-50" />
            </form>
          </div>
        </div>
      </div>
    </div>
    );
};


export default AddItem;