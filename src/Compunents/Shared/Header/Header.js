import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../creative-agency-main/images/logos/logo.png'
const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <Link className="navbar-brand" to="/"><img className="w-50" src={logo} alt="" /></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">

                <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                    <li className="nav-item active pl-3">
                        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item pl-3">
                        <Link className="nav-link" to="/portfolio">Our Portfolio</Link>
                    </li>
                    <li className="nav-item pl-3">
                        <Link className="nav-link" to="/team">Our Team</Link>
                    </li>
                    <li className="nav-item pl-3">
                        <Link className="nav-link" to="/contact">Contact Us</Link>
                    </li>
                    <li className="nav-item pl-3">
                        <Link className="nav-link btn btn-dark text-white px-5" to="/login">Login</Link>
                    </li>
                </ul>

            </div>
        </nav>
    );
};

export default Header;