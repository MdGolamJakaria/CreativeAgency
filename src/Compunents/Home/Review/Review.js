import React from 'react';

const Review = (props) => {
    // console.log(props.review.image)
    return (
        <div className="card">
            <div className="row p-3">
                <div className="col-md-4">
                    <img src={props.review.image} className="card-img-top" alt="..." />
                </div>
                <div className="col-md-8">
                    <h4 className="card-title">{props.review.name}</h4>
                    <h6 className="card-title">{props.review.rule}</h6>
                </div>
            </div>
            <div className="card-body">

                <p className="card-text">{props.review.review}</p>
            </div>
        </div>
    );
};

export default Review;