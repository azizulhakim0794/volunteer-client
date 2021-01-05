import React, { useContext, useEffect, useState } from 'react';
import './Event.css'
import Eventlist from './Eventlist/Eventlist';
import Header from '../Header/Header.js';
import { UserContext } from '../../App';
import { useHistory, useLocation} from 'react-router-dom';

const Event = () => {
  const history = useHistory()
  const location = useLocation()
    const [cart , setCart] = useState([])
    const [loggedInUser , setLoggedInUser] = useContext(UserContext)
    useEffect(()=>{
    fetch('https://fast-castle-20800.herokuapp.com/addRegistration?email='+loggedInUser.email,{
      method: 'GET',
      headers: {
        'Content-Type' : 'application/json',
        authorization: `Bearer ${sessionStorage.getItem('token')}`
      }
    })
    .then(res => res.json())
    .then(data => setCart(data))
    }, []);
    // console.log(loggedInUser.email)
    const dutyDelete = (id)=>{
    
      fetch(`https://fast-castle-20800.herokuapp.com/delete/${id}`,{
        method: 'DELETE',
      })
      .then(res => res.json())
      .then(result => {
        // console.log(result)
        if(result){
          history.push('/home')
        }
        if(location.pathname = '/event'){
          history.push('/event')
        }
      })
    }
    return (
        <div className="container row ">
            <Header></Header>
{
  cart.map(data =><Eventlist data={data} dutyDelete={dutyDelete} key={data._id}></Eventlist>)

}
         </div>
    );
};

export default Event;