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



function App() {
  return (
    <div >
     <AuthProvider>
     <Router>
       <Switch>
         <Route exact path="/">
           <Home></Home>
         </Route>
         <Route path="/home">
           <Home></Home>
         </Route>
         <PrivateRoute path="/additem">
           <AddItem></AddItem>
         </PrivateRoute>
        <Route path="/login">
          <SignIn></SignIn>
        </Route>
        <Route path="/item/:id">
          <PlaceOrder></PlaceOrder>
        </Route>
        <Route path="/myorders" >
        <MyOrders></MyOrders>
        </Route>
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
