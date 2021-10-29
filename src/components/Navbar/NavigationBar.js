import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

import { HashLink } from 'react-router-hash-link';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavigationBar.css'
import useFirebase from '../../hooks/useFirebase';


const NavigationBar = () => {
    const {user,logOut} = useFirebase();
   
  return (


   
    <>
        <Navbar bg="light" variant="light" sticky="top" collapseOnSelect expand="lg" >
            <Container>
            <Navbar.Brand ><span className="we-care">  We Care</span> </Navbar.Brand>
               
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav.Link as={HashLink} to="/home">Home</Nav.Link>
                    
                    
                    <Nav.Link as={HashLink} to="/about">About Us</Nav.Link>
                    
                   
                  {
                      user.email?
                      <button onClick={logOut}>Log Out</button>
                      :
                      <Nav.Link as={HashLink} to="/login">Log in</Nav.Link>
                  }


                     
                   
                </Navbar.Collapse>
            </Container>
        </Navbar>
    
    </>
);
};

export default NavigationBar;