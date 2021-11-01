import React from 'react';
import useAuth from '../../hooks/useAuth';
import './AllOrder.css'

const AllOrder = (props) => {
    const { address, singleItem } = props.allOrder;
    const user = useAuth();
    console.log(user)

    return (
        <div>
            <div className="card">
                <div className="card-body">
                    <h1>{singleItem.name}</h1>
                    <p>{address}</p>
                    <p>{user.user.displayName}</p>
                </div>
            </div>
        </div>
    );
};

export default AllOrder;