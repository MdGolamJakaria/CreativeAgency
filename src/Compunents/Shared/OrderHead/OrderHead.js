import React from 'react';
import logo from '../../../creative-agency-main/images/logos/logo.png'

const OrderHead = () => {
    return (
        <div className='container my-3 '>
            <div className="row">
                <div className="col-md-4">
                    <img style={{ width: '200px' }} src={logo} alt="" />
                </div>
                <div className="col-md-8 d-flex  justify-content-between">
                    <h3>Order</h3>
                    <h4>User Name</h4>
                </div>
            </div>

        </div>
    );
};

export default OrderHead;