import React from 'react';
import './BrandLogos.css'
import slack from '../../../creative-agency-main/images/logos/slack.png'
import google from '../../../creative-agency-main/images/logos/google.png'
import uber from '../../../creative-agency-main/images/logos/uber.png'
import netflix from '../../../creative-agency-main/images/logos/netflix.png'
import airbnb from '../../../creative-agency-main/images/logos/airbnb.png'

const BrandLogos = () => {
    return (
        <div className='row brandLogos'>
            <div className="col-md-1">

            </div>
            <div className="col-md-2 d-flex align-items-center">
                <img className='w-75' src={slack} alt="" />
            </div>
            <div className="col-md-2 d-flex align-items-center">
                <img className='w-75' src={google} alt="" />
            </div>
            <div className="col-md-2 d-flex align-items-center">
                <img className='w-75' src={uber} alt="" />
            </div>
            <div className="col-md-2 d-flex align-items-center">
                <img className='w-75' src={netflix} alt="" />
            </div>
            <div className="col-md-2 d-flex align-items-center">
                <img className='w-75' src={airbnb} alt="" />
            </div>

        </div>
    );
};

export default BrandLogos;