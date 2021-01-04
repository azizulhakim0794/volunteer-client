import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Header.css'

import logo from '../../images/logos/Group 1329.png'

const Header = () => {
  const history = useHistory()
  // const handleRegister = () =>{
  //   history.push('/register')
  // }
    return (
        <div className="container">
            <br/>
            
            <nav className="navbar navbar-expand-lg navbar-light bg-none">
  <img src={logo} className="navbar-brand logo" />
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav ml-auto">
      <Link to="/home"className="nav-link active">Home </Link>
      <Link to="/event"className="nav-link active">Event</Link>
      <Link to="/contact"className="nav-link active">Contact</Link>
      <Link to="/login"className="nav-link active">Login</Link>
      {/* <button onClick={handleRegister} className="btn btn-success">Register</button> */}
    </div>
  </div><br/>
</nav>

        </div>
    );
};

export default Header;