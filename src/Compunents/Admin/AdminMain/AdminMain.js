import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AddService from '../AddService/AddService';
import AdminServiceList from '../AdminServiceList/AdminServiceList';
import MakeAdmin from '../MakeAdmin/MakeAdmin';

const AdminMain = () => {
    const [adminRoute, setAdminRoute] = useState()

    const adminRouteHandle = (name) => {
        setAdminRoute(name)
    }
    return (
        <main className='row pt-3'>
            <div className="col-md-3 switch-options">
                <Link className='clicked' to='#' onClick={() => adminRouteHandle('serviceList')}><h6 className='pb-3 text-dark'><i className="fas fa-shopping-cart"></i> Service List</h6></Link>
                <Link className='clicked' to='#' onClick={() => adminRouteHandle('addService')}><h6 className='pb-3 text-dark '><i className="fas fa-book"></i> Add Service</h6></Link>
                <Link className='clicked' to='#' onClick={() => adminRouteHandle('makeAdmin')}><h6 className='pb-3 text-dark '><i className="fas fa-comment-dots"></i> Make Admin</h6></Link>
            </div >
            <div className="col-md-9 order-form">
                {
                    adminRoute === 'serviceList' ? <AdminServiceList></AdminServiceList> : adminRoute === "addService" ? <AddService></AddService> : adminRoute === 'makeAdmin' ? <MakeAdmin></MakeAdmin> : <AdminServiceList></AdminServiceList>
                }
            </div>
        </main >
    );
};

export default AdminMain;