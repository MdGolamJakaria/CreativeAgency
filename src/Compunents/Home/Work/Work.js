import React from 'react';
import './Work.css'
const Work = (props) => {
    // console.log(props.work)
    return (
        <div className='col-md-4 d-flex justify-content-center'>
            <img className='work-image' src={props.work.image} alt="" />
        </div>
    );
};

export default Work;