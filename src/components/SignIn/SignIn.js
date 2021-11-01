import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './SignIn.css'
import {FcGoogle} from 'react-icons/fc';
import {FaUserAlt} from 'react-icons/fa';

import NavigationBar from '../NavigationBar/NavigationBar';

const SignIn = () => {
    const {signInUsingGoogle} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';
    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }
    return (
        <div className="container my-5">
           
            <h1 className="text-primary text-center">please Sign In</h1>
            <div className="user-icon">
                <FaUserAlt/>
                </div>
           <div className="google-sign-in">
           <button   onClick={handleGoogleLogin} className="google-sign-in-btn text-center"> 
          <span className="google-icon"> <FcGoogle/></span>  Google Sign In</button>
           </div>
        </div>
    );
};

export default SignIn;