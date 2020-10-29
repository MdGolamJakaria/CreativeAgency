import React, { useContext, useState } from 'react';
import Header from '../Header/Header';
import logo from '../../../creative-agency-main/images/logos/logo.png'
import './Login.css'
import { Link, useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../../App';
import { handleGoogleSignIn, handleSignOut, initializeLoginFramework } from './loginManager';
const Login = () => {
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        photo: ''
    });

    initializeLoginFramework();

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    console.log(loggedInUser)
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const googleSignIn = () => {
        handleGoogleSignIn()
            .then(res => {
                handleResponse(res, true);
            })
    }
    const handleResponse = (res, redirect) => {
        setUser(res);
        setLoggedInUser(res);
        if (redirect) {
            history.replace(from);
        }
    }

    const signOut = () => {
        handleSignOut()
            .then(res => {
                handleResponse(res, false);
            })
    }
    return (
        <div className='container'>
            <Header></Header>
            <div className="row">
                <img className=' logo' src={logo} alt="" />
            </div>
            <div className="login-area d-flex  justify-content-center  align-items-center">
                {
                    loggedInUser.isSignedIn ?
                        <Link to='#' onClick={signOut} className='login-style'>
                            <div className="row google-login">
                                <div className="d-flex text-center m-auto ">
                                    <h4>Logout</h4>
                                </div>
                            </div>
                        </Link>

                        :

                        <div>
                            <h1 className='text-center pb-5' > Login with </h1>
                            <Link to='#' onClick={googleSignIn} className='login-style'>
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


                }
            </div>
        </div>
    );
};

export default Login;