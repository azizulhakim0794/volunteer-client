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
<nav className="navbar navbar-expand-lg navbar-light">
<img src={logo} className="navbar-brand logo" />
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                <Link to="/home" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                <Link to="/event" className="nav-link">Event</Link>
                </li>
                <li className="nav-item">
                <Link to="/contact" className="nav-link">Contact</Link>
                </li>
                <li className="nav-item">
                <Link to="/login" className="nav-link">Login</Link>
                </li>
              </ul>
            </div>
        </nav>

        </div>
    );
};

export default Header;