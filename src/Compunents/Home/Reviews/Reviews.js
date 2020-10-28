import React from 'react';
import customer1 from '../../../creative-agency-main/images/customer-1.png'
import customer2 from '../../../creative-agency-main/images/customer-2.png'
import customer3 from '../../../creative-agency-main/images/customer-3.png'
import Review from '../Review/Review';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Reviews = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    const reviews = [
        {
            id: 1,
            image: customer1,
            name: 'Nash Patrik',
            rule: 'CEO, Manpol',
            review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ',
        },
        {
            id: 2,
            image: customer2,
            name: 'Miriam Barron',
            rule: 'CEO, Manpol',
            review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ',
        },
        {
            id: 3,
            image: customer3,
            name: 'Bria Malone',
            rule: 'CEO, Manpol',
            review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ',
        },

    ];
    return (
        <div>
            <div className='row mt-5'>
                <h1 className='m-auto py-5'>Clients <span className='green-text'>Feedback</span></h1>
            </div>
            <Carousel
                className='row m-5 card-deck'
                swipeable={false}
                draggable={false}
                showDots={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={2000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                // deviceType={this.props.deviceType}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >

                {
                    reviews.map(review => <Review key={review.id} review={review} ></Review>)
                }
            </Carousel>


        </div>

    );
};

export default Reviews;