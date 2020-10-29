import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../creative-agency-main/images/logos/logo.png'
const AdminHeader = () => {
    return (
        <div className='container my-3 '>
            <div className="row">
                <div className="col-md-3">
                    <Link to='/'><img style={{ width: '200px' }} src={logo} alt="" /></Link>
                </div>
                <div className="col-md-9 d-flex  justify-content-between">
                    <h3>Service List</h3>
                    <h4>User Name</h4>
                </div>
            </div>

        </div>
    );
};

export default AdminHeader;