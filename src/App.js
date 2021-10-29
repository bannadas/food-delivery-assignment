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


function App() {
  return (
    <div >
     <Router>
       <Switch>
         <Route path="/home">
           <Home></Home>
         </Route>
         <Route path="/additem">
           <AddItem></AddItem>
         </Route>
        <Route path="/login">
          <SignIn></SignIn>
        </Route>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
