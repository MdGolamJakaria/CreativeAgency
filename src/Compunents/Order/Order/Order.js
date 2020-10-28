import React, { useContext } from 'react';
import OrderHead from '../../Shared/OrderHead/OrderHead';
import OrderMain from '../OrderMain/OrderMain';

const Order = () => {
    return (
        <div className='container'>
            <OrderHead></OrderHead>
            <OrderMain></OrderMain>
        </div>
    );
};

export default Order;