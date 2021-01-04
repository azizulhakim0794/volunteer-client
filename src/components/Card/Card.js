import React, { useContext } from 'react';
import './Card.css'
import fakeData from '../../fakeData/fakeData'
import { UserContext } from '../../App';
import { useHistory } from 'react-router-dom';
const Card = (props) => {
    const {name , id , image}  = props.data
    const [loggedInUser , setLoggedInUser] = useContext(UserContext)
   

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