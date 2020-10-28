import React from 'react';
import Header from '../Header/Header';
import logo from '../../../creative-agency-main/images/logos/logo.png'
import './Login.css'
import { Link } from 'react-router-dom';
const Login = () => {
    const loginHandle = () => {
        console.log('Loging under proccess')
    }
    return (
        <div className='container'>
            <Header></Header>
            <div className="row">
                <img className=' logo' src={logo} alt="" />
            </div>
            <div className="login-area d-flex  justify-content-center  align-items-center">
                <div>
                    <h1 className='text-center pb-5' > Login with </h1>
                    <Link to='#' onClick={loginHandle} className='login-style'>
                        <div className="row google-login">
                            <div className="col-md-4 d-flex align-items-center">
                                <i className="fab fa-google"></i>
                            </div>
                            <div className="col-md-8 d-flex align-items-center">
                                <h4>Continue with Google</h4>
                            </div>
                        </div>
                    </Link>
                    <h5 className='m-auto create-account'>Don’t have an account? <Link to='/createAccount'>Create an account</Link> </h5>
                </div>
            </div>
        </div>
    );
};

export default Login;