import React from 'react';

import './AllOrder.css'
import {ImCross} from 'react-icons/im';

const AllOrder = (props) => {
    const {singleItem, userName, userEmail } = props.allOrder;
    // const handleDelete = () =>{
    //     const proceed = window.confirm('Are you sure you want to delete?');
    //     if(proceed){
    //         const url = `http://localhost:5000/allorders/${id}`;
    //         fetch(url,{
    //             method:'DELETE'
    //         })
    //         .then(res => res.json())
    //         .then(data => {
    //             if(data.deleteCount > 0){
    //                 alert('Deleted successfully'
    //                 );
    //                 const remainingOrders = AllOrder.filter(restOrders => restOrders._id !== _id);
                    
    //             }
    //         })
    //     }
    // }
   

    return (
        <div className="container">
            <div className=" container order-card">
                <div className="order-card-body">
                    <div className="img">
                 
                        <img src={singleItem.image} alt="" /></div>
                    <div>
                    <h1>{singleItem.name}</h1>
                    <h3> Price:{singleItem.price}Tk</h3>
                    <p>{singleItem.description}</p>

                   
                    <p>User Name:{userName}</p>
                    <p> User email:{userEmail}</p>
                    </div>
                    <div>
                        <button  className="delete-btn">Delete Order <ImCross/></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllOrder;