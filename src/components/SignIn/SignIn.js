import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFirebase';
import NavigationBar from '../Navbar/NavigationBar';
import './SignIn.css'


const SignIn = () => {
    const {signInUsingGoogle} = useFirebase();
    return (
        <div>
            <NavigationBar></NavigationBar>
            <h1>please Sign In</h1>
            <button onClick={signInUsingGoogle} className="google-sign-in-btn">  Google Sign In</button>
        </div>
    );
};

export default SignIn;