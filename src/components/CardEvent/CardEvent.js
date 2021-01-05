import React from 'react';
import image from '../../images/childSupport.png'
import './CardEvent.css'
import logo from'../../images/logos/Group 1329.png'

const CardEvent = () => {
    return (
        <>
        <img src={logo} className="logo-img" alt=""/>
        <div className = "container">
           
        <div className = "row card-deck">
  <div className="col-sm-6 flex">
    <div className="card ">
    <div className="row no-gutters">
    <div className="col-md-4">
      <img src={image} className="card-img" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <button type="button" className="btn btn-light">Cancel</button>
      </div>
    </div>
  </div>
    </div>
    </div>
  </div>

    </div>
    </>
    );
};

export default CardEvent;