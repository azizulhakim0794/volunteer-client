import React, { useContext, useEffect, useState } from 'react';
import Card from '../Card/Card.js';
import Header from '../Header/Header.js';
import Background from './Background/Background.js';
import './Home.css'
import { UserContext } from '../../App.js';
import { useHistory } from 'react-router-dom';
import Footer from '../Footer/Footer.js';
import Loading from '../Loading/Loading.js';
// import { addToDatabaseCart } from '../../utilities/databaseManager.js';

const Home = () => {
    const [loggedInUser , setLoggedInUser] =useContext(UserContext)
    const [duties , setDuties] = useState([])
    useEffect(() =>{
        fetch(' https://fast-castle-20800.herokuapp.com/duties')
        .then(res => res.json())
        .then(data => setDuties(data))
    },[])
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
       <div className="color">
           <Background></Background>
        <div className="container">
            <Header/>
            
            <p className="right">
          <img src={loggedInUser.photo} className="rounded-circle profilePic " alt=""/> {loggedInUser.name}
           </p>
            <h2 className="col-md-7 mar-auto">I GROW BY HELPING PEOPLE IN NEED.</h2><br/>
                            <div className="input-group col-md-7 mar-auto">
                            <input type="text" className="form-control" placeholder="Search..." defaultValue="Search..."/>
                                            <div className="input-group-append">
                                                            <button className="btn btn-success" type="button" id="button-addon2">Search</button>
                                           </div>
                            </div>
            <br/>
            <br/>
                        <div className = "row card-deck">
                        {
              duties.length === 0 && <Loading/>
            }
                                {
                                duties.map(data =><Card data={data} handleCardClick={handleCardClick} key={data._id}></Card>) 
                                }
                    </div> 
               
            </div>
                    <div>
                        <Footer></Footer>
                    </div>
            </div>
    );
};

export default Home;