import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { customerCatagoryContext } from '../../../App';
import OrderForm from '../OrderForm/OrderForm';
import Review from '../Review/Review';
import ServiceList from '../ServiceList/ServiceList';
import './OrderMain.css'
const OrderMain = () => {

    const [customerCatagory, setCustomerCatagory] = useContext(customerCatagoryContext)

    const showDetails = (name) => {
        setCustomerCatagory(name)
    }



    return (
        <main className='row pt-3'>
            <div className="col-md-3 switch-options">
                <Link className='clicked' to='#' onClick={() => showDetails('order')}><h6 className='pb-3 text-dark'><i className="fas fa-shopping-cart"></i> Order</h6></Link>
                <Link className='clicked' to='#' onClick={() => showDetails('service')}><h6 className='pb-3 text-dark '><i className="fas fa-book"></i> Service List</h6></Link>

                <Link className='clicked' to='#' onClick={() => showDetails('review')}><h6 className='pb-3 text-dark '><i className="fas fa-comment-dots"></i> Review</h6></Link>
            </div >
            <div className="col-md-9 order-form">
                {
                    customerCatagory === 'order' ? <OrderForm></OrderForm> : customerCatagory === "service" ? <ServiceList></ServiceList> : customerCatagory === 'review' ? <Review></Review> : <OrderForm></OrderForm>
                }
            </div>
        </main >
    );
};

export default OrderMain;