import logo from './logo.svg';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";

import './App.css';
import Home from './components/Home/Home';
import AddItem from './components/AddItem/AddItem';
import SignIn from './components/SignIn/SignIn';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import Error from './components/Error/Error';
import Dashboard from './components/Dashboard/Dashboard';
import MyOrders from './components/MyOrders/MyOrders';
import AllOrders from './components/AllOrders/AllOrders';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Footer from './components/Footer/Footer';



function App() {
  return (
    <div >
      <AuthProvider>
        <Router>
          <Switch>
           
            <Route exact path="/">
            <NavigationBar></NavigationBar>
              <Home></Home>
              <Footer></Footer>
            </Route>
            <Route path="/home">
              <NavigationBar></NavigationBar>
              <Home></Home>
              <Footer></Footer>
            </Route>
            <PrivateRoute path="/additem">
            <NavigationBar></NavigationBar>
              <AddItem></AddItem>
              <Footer></Footer>
            </PrivateRoute>
            <Route path="/login">
            <NavigationBar></NavigationBar>
              <SignIn></SignIn>
              <Footer></Footer>
            </Route>
            <PrivateRoute path="/foodDtl/:_id">
            <NavigationBar></NavigationBar>
              <PlaceOrder></PlaceOrder>
              <Footer></Footer>
            </PrivateRoute>
            <PrivateRoute path="/myorders" >
            <NavigationBar></NavigationBar>
              <MyOrders></MyOrders>
              <Footer></Footer>
            </PrivateRoute>
            <PrivateRoute path="/allorders" >
              <NavigationBar></NavigationBar>
              <AllOrders></AllOrders>
              <Footer></Footer>
            </PrivateRoute>
            <Route path='*'>
              <Error></Error>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
