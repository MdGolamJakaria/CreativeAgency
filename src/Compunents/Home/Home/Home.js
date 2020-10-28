import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import BrandLogos from '../BrandLogos/BrandLogos';
import HeaderMain from '../HeaderMain/HeaderMain';
import MailForm from '../MailForm/MailForm';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';
import Works from '../Works/Works';
import './Home.css'
const Home = () => {
    return (
        <div className='container '>
            <div className="home-section">
                <Header></Header>
                <HeaderMain></HeaderMain>
            </div>

            <BrandLogos></BrandLogos>
            <Services></Services>
            <Works></Works>
            <Reviews></Reviews>
            <MailForm></MailForm>
        </div>
    );
};

export default Home;