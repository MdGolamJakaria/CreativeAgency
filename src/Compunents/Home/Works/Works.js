import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import work1 from '../../../creative-agency-main/images/carousel-1.png'
import work2 from '../../../creative-agency-main/images/carousel-2.png'
import work3 from '../../../creative-agency-main/images/carousel-3.png'
import work4 from '../../../creative-agency-main/images/carousel-4.png'
import work5 from '../../../creative-agency-main/images/carousel-5.png'
import Work from '../Work/Work';
import './Works.css'


const Works = () => {
    const works = [
        {
            id: 1,
            image: work1,
        },
        {
            id: 2,
            image: work2,
        },
        {
            id: 3,
            image: work3,
        },
        {
            id: 4,
            image: work4,
        },
        {
            id: 5,
            image: work5,
        },

    ];


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
    return (
        <div className='container work-section'>
            <h1 className='text-center mb-5 pt-5 text-white'>Here are some of <span className='green-text'>our works</span> </h1>
            <Carousel
                className='row m-5'
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
                    works.map(works => <Work key={works.id} work={works} ></Work>)
                }
            </Carousel>;
        </div>
    );
};

export default Works;