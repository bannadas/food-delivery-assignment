import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';

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
        <div>
            <NavigationBar></NavigationBar>
            <h1>please Sign In</h1>
            <button  onClick={handleGoogleLogin} className="google-sign-in-btn">  Google Sign In</button>
        </div>
    );
};

export default SignIn;