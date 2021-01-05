import React from 'react';
import './Card.css'
const Card = (props) => {
    const {name , image}  = props.data
    return (
        <>
            <div className="col-md-3 mar-bottom">
              <div className="card text-White bg-success cursor" onClick={() =>  props.handleCardClick(props.data)}>
                            <img src={image} className="card-img-top" alt="..."/>
                          <div className="card-body">
                               <h5 className="card-title">{name}</h5>
                          </div>  
              </div>
       </div>

       </>
    );
};

export default Card;