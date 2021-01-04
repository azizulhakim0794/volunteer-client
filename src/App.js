import React, { createContext, useState } from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Background from "./components/Home/Background/Background";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Nomatch from "./components/Nomatch/Nomatch";
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Event from "./components/Event/Event.js";
import unknownImg from '../src/images/unknown.jpg'
import CardEvent from "./components/CardEvent/CardEvent";
export const UserContext = createContext()
function App() {
  const [loggedInUser , setLoggedInUser] = useState({     
     isSignedIn: false,
    name: 'Unknown Person',
    email: '',
    password: '',
    photo: `${unknownImg}`,
    duty:[],
  })
  return (
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        
      <Router>
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/event">
            <Event/>
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <PrivateRoute path="/register/:id">
          <Register />
          </PrivateRoute>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/cardEvent">
            <CardEvent/>
          </Route>
          <Route path="*">
            <Nomatch/>
          </Route>
        </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
