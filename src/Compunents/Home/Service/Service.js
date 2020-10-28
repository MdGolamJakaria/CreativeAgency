import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Service.css'
const Service = (props) => {
    return (


        <div className="col-md-4">
            <div className="card text-center p-3 mb-3 card-style">
                <Link className='service' to='/order' onClick={() => props.clickHandler({ service: props.service })}>
                    <img src={props.service.image} className="card-img-top w-25 m-auto" alt="Service" />
                    <div className="card-body">
                        <h5 className="card-title">{props.service.service}</h5>
                        <p className="card-text">{props.service.description}</p>
                    </div>
                </Link>
            </div>
        </div>

    );
};

export default Service;