import React, { useEffect, useState } from 'react';
import AllOrder from '../AllOrder/AllOrder';
import './AllOrders.css';

const AllOrders = () => {
    const [allOrders, setAllOrders] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allorders')
            .then(res => res.json())
            .then(data => setAllOrders(data));
    }, [])

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        {
                            allOrders.map(allOrder => <AllOrder key={allOrders._id} allOrder={allOrder}></AllOrder>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllOrders;