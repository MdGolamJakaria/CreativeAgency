import React, { useContext, useState } from 'react';
import './Services.css'
import service1 from '../../../creative-agency-main/images/icons/service1.png'
import service2 from '../../../creative-agency-main/images/icons/service2.png'
import service3 from '../../../creative-agency-main/images/icons/service3.png'
import service4 from '../../../creative-agency-main/images/icons/service4.png'
import service5 from '../../../creative-agency-main/images/icons/service5.png'
import Service from '../Service/Service';
import { OrderContext } from '../../../App';

const Services = () => {
    const services = [
        {
            id: 1,
            service: 'Web & Mobile design',
            description: 'We craft stunning and amazing web UI, using a well drrafted UX to fit your product.',
            image: service1,
        },
        {
            id: 2,
            service: 'Graphic design',
            description: 'Amazing flyers, social media posts and brand representations that would make your brand stand out.',
            image: service2,
        },
        {
            id: 3,
            service: 'Web development',
            description: 'With well written codes, we build amazing apps for all platforms, mobile and web apps in general.',
            image: service3,
        },
        {
            id: 4,
            service: 'Web & Mobile design',
            description: 'We craft stunning and amazing web UI, using a well drrafted UX to fit your product.',
            image: service4,
        },
        {
            id: 5,
            service: 'Animation',
            description: 'We craft stunning and amazing web UI, using a well drrafted UX to fit your product.',
            image: service5,
        },
    ];
    const [service, setService] = useState(services)
    // console.log(service)

    const [order, setorder] = useContext(OrderContext)

    const clickHandler = (service) => {
        setorder(service);
        
    }
    return (
        <div className='container service-section'>
            <h1 className='text-center'>Provide awesome <span className='green-text'>services</span>
            </h1>
            <br />
            <br />

            <div className="row">
                {
                    service.map(service => <Service key={service.id} service={service} clickHandler={clickHandler}></Service>)
                }
            </div>
            <br />
            <br />
        </div>
    );

};

export default Services;