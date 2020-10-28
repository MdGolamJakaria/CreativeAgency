import React from 'react';
import { Link } from 'react-router-dom';
import mainImage from '../../../creative-agency-main/images/logos/Frame.png'
import './HeaderMain.css'
const HeaderMain = () => {
    return (
        <section className='row d-flex align-items-center d-block header-main'>
            <div className="col-md-5 pl-5">
                <h1>Let’s Grow Your <br />
                Brand To The <br /> Next Level
                </h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>
                <Link className='btn btn-dark px-5' to='/hire'>Hire us</Link>
            </div>
            <div className="col-md-7">
                <img className='w-75' src={mainImage} alt="" />
            </div>
        </section>
    );
};

export default HeaderMain;