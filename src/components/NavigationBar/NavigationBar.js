import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

import { HashLink } from 'react-router-hash-link';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavigationBar.css'
import { FaUserAlt } from 'react-icons/fa';
import { GiFoodTruck
} from 'react-icons/gi';
import useAuth from '../../hooks/useAuth';




const NavigationBar = () => {
    const { user, logOut } = useAuth();

    return (



        <>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand > <span className="nav-title"> <GiFoodTruck/> Aahar</span> </Navbar.Brand>

                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} to="/home"><span className="text-white">Home</span></Nav.Link>

                    {
                        user?.displayName?
                        <Nav.Link as={HashLink} to="/additem"><span className="text-white">Add Item</span></Nav.Link> :
                        <span style={{display:"none"}}></span>
                    }

                        

                        {user?.displayName ?
                            <Nav.Link as={HashLink} to="/myorders"><span className="text-white">My Orders</span></Nav.Link> :
                            <span style={{display:"none"}}></span>
                        }
                        {
                            user?.displayName ?
                            <Nav.Link as={HashLink} to="/allorders"><span className="text-white">All Orders</span></Nav.Link> :
                            <span style={{display:"none"}}></span>
                        }
                        


                        {
                            user.email ?
                                <button className="log-out-btn" onClick={logOut}>Log Out  </button>
                                :
                                <Nav.Link as={HashLink} to="/login"><span className="text-white">Log in</span></Nav.Link>
                        }
                        {user.email && <span style={{ color: 'black' }}>
                            <span className="text-white"><FaUserAlt />  Logged in as {user.displayName} </span>         </span>}







                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    );
};

export default NavigationBar;