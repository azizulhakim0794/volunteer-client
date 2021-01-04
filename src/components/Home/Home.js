import React, { useContext, useEffect, useState } from 'react';
import Card from '../Card/Card.js';
import Header from '../Header/Header.js';
import Background from './Background/Background.js';
import './Home.css'
import { UserContext } from '../../App.js';
import { useHistory } from 'react-router-dom';
// import { addToDatabaseCart } from '../../utilities/databaseManager.js';

const Home = () => {
    const [loggedInUser , setLoggedInUser] =useContext(UserContext)
    const [duties , setDuties] = useState([])
    useEffect(() =>{
        fetch('http://localhost:5000/duties')
        .then(res => res.json())
        .then(data => setDuties(data))
    },[])
    // console.log(duties)
    const history = useHistory()
    const handleCardClick = (item) => {
        
    if(loggedInUser.isSignedIn = false) {
        history.push('/login')
    }
    if(loggedInUser.isSignedIn = true) {
        history.push(`/register/${item.id}`)
        const data = {...loggedInUser}
        data.duty = item
        setLoggedInUser(data)
    }
    // addToDatabaseCart(item.id , 1)
}
// console.log(duties)
    
    return (
        <div className="">
            <Header/>
            <p className="right">
          <img src={loggedInUser.photo} className="rounded-circle profilePic "/> {loggedInUser.name}
           </p>
            <h2 className="col-md-7 mar-auto">I GROW BY HELPING PEOPLE IN NEED.</h2><br/>
            <div className="input-group col-md-7 mar-auto">
                       <input type="text" className="form-control" placeholder="Recipient's username"/>
                  <div className="input-group-append">
                         <button className="btn btn-success" type="button" id="button-addon2">Search</button>
                  </div>
            </div>
            <br/>
            <br/>
            <div className = "container row card-deck">
            

            {
              duties.map(data =><Card data={data} handleCardClick={handleCardClick} key={data._id}></Card>) 
            }
                
            
            </div>
        </div>
    );
};

export default Home;