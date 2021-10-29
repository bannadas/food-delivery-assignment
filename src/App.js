import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import About from "./components/About/About";


import Home from './components/Home/Home';
import MyOders from "./components/MyOrders/MyOders";
import SignIn from "./components/SignIn/SignIn";
import AuthProvider from "./context/AuthProvider";
import PrivateRoute from "./privateRoute/PrivateRoute";

function App() {
  return (
    <div>
      <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
         

          <Route path="/login">
          <SignIn></SignIn>
          </Route>
          <PrivateRoute path="/about">
            <About></About>
          </PrivateRoute>
          
          <PrivateRoute path="/myorders">
        <MyOders></MyOders>
          </PrivateRoute>

        </Switch>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
