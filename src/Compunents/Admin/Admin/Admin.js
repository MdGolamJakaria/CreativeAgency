import React from 'react';
import AdminHeader from '../AdminHeader/AdminHeader';
import AdminMain from '../AdminMain/AdminMain';

const Admin = () => {
    return (
        <div className='container'>
            <AdminHeader></AdminHeader>
            <AdminMain></AdminMain>
        </div>
    );
};

export default Admin;