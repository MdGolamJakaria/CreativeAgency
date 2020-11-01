import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../creative-agency-main/images/logos/logo.png'

const OrderHead = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div className='container my-3 '>
            <div className="row">
                <div className="col-md-3">
                    <Link to='/' ><img style={{ width: '200px' }} src={logo} alt="" /></Link>
                </div>
                <div className="col-md-9 d-flex  justify-content-between">
                    <h3>Order</h3>
                    <h4>{loggedInUser.name}</h4>
                </div>
            </div>

        </div>
    );
};

export default OrderHead;