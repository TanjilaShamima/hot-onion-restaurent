import React, { useEffect, useState } from 'react';
import { fakeFoodIteams } from '../../../fakeData/fakeFoodIteams';
import OrderItemCart from '../OrderItemCart/OrderItemCart';
import OrderItems from '../OrderItems/OrderItems';

const DeliveryItems = () => {
    const [orderItems, setOrderItems] = useState([]);

    useEffect(() => {
        setOrderItems(fakeFoodIteams.splice(0,2));
    }, []);
    // console.log(orderItems);
    return (
        <section className="float-right" style={{width : '80%'}}>
            <p>From <strong>Best Onion Pizza House</strong> <br/>Arriving in 20-30 minutes <br/>107 Rd No 8</p>
            <div>
                {
                    orderItems.map(orderItem => <OrderItems key={orderItem.foodId} orderItem={orderItem}></OrderItems>)
                }
                
            </div>
            <div>
                <OrderItemCart></OrderItemCart>
            </div>
        </section>
    );
};

export default DeliveryItems;