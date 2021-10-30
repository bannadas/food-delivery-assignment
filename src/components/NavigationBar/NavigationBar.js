import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

import { HashLink } from 'react-router-hash-link';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavigationBar.css'

import useAuth from '../../hooks/useAuth';




const NavigationBar = () => {
    const {user,signInUsingGoogle,logOut} = useAuth();
   
  return (


   
    <>
        <Navbar bg="light" variant="light" sticky="top" collapseOnSelect expand="lg" >
            <Container>
            <Navbar.Brand ><span className="we-care">  We Care</span> </Navbar.Brand>
               
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav.Link as={HashLink} to="/home">Home</Nav.Link>
                    
                    
                    <Nav.Link as={HashLink} to="/addService">Add a Service</Nav.Link>
                    <Nav.Link as={HashLink} to="/additem">Add Item</Nav.Link>
                    <Nav.Link as={HashLink} to="/myorders">MY ORDERS</Nav.Link>
                    <Nav.Link as={HashLink} to="/dashboard">DashBoard</Nav.Link>
                   
                    {
                      user.email?
                      <button onClick={logOut}>Log Out</button>
                      :
                      <Nav.Link as={HashLink} to="/login">Log in</Nav.Link>
                  }
                      {user.email && <span style={{ color: 'black'}}>Logged in as  {user.displayName}         </span>}

                   
                  


                     
                   
                </Navbar.Collapse>
            </Container>
        </Navbar>
    
    </>
);
};

export default NavigationBar;