import React from 'react';

const AdminServiceList = () => {
    return (
        <div className='row text-center'>
            <div className="col-md-1"></div>
            <div className="col-md-2">
                <h6>Name</h6>
            </div>
            <div className="col-md-2">
                <h6>Email id</h6>
            </div>
            <div className="col-md-2">
                <h6>Service</h6>
            </div>
            <div className="col-md-2">
                <h6>Project Details</h6>
            </div>
            <div className="col-md-2">
                <h6>Status</h6>
            </div>
        </div>
    );
};

export default AdminServiceList;