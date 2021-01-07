import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import './Register.css'
import logo from '../../images/logos/Group 1329.png'
import { useHistory, useParams } from 'react-router-dom';
// import {addToDatabaseCart} from '../../utilities/databaseManager'
const Register = (e) => {
  const {id} = useParams()
  const history  = useHistory()
  const [loggedInUser ] = useContext(UserContext)
  const [duty , setDuty] = useState([{
    details:"nothing"
  }])
  const [selectedDate_data, setSelectedDate_data] = useState({
    checkIn : '',
    checkOut :'',
    description:"",
  })
 
    const allData ={...loggedInUser , selectedDate_data}

  useEffect(()=>{
    fetch(' https://fast-castle-20800.herokuapp.com/duties/'+id)
    .then(res => res.json())
    .then(data => 
      setDuty(data[0]))
  },[])
  // console.log(id)
  const handleCheckInDate = (date) => {
    const  checkIn = date.target.value
    let  checkIns = {...selectedDate_data, checkIn}
    selectedDate_data.checkIn = checkIns; 
    setSelectedDate_data(checkIns);
};
const handleCheckOutDate = (e) => {
  let  checkOut = e.target.value
  let checkOuts = {...selectedDate_data, checkOut}
  selectedDate_data.checkOut = checkOuts
    setSelectedDate_data(checkOuts);
}

  const handleSubmit = (e) => {
    
      fetch(' https://fast-castle-20800.herokuapp.com/addRegistration', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(allData)
    });

    if(handleBlur&&handleSubmit){
      history.push('/event')
    }
  
    e.preventDefault();
  }
   
  const handleBlur=(e)=>{
    if(e.target.name = "description"){
      let description  = e.target.value
      // const data = description
      const allData = {...selectedDate_data , description}
      selectedDate_data.description = allData
      setSelectedDate_data(allData)
      if(description.length < 15){
        alert("please fill up your dream project's description minimum 10 words")
      }
      // if(handleBlur&&handleSubmit){
      //   history.push('/event')
      // }
     
    }
    
  }
  // This project is going to be my dream project. With this project i will help many people
    return (
        <>
        <div>
          <img className="logo-img" src={logo} alt=""/>
          </div>
            <form action="/addRegistration" onSubmit={handleSubmit} method="post">
              <div className="container row ">
                <div className="col-md-5 margin-auto">
              
                <div className="form-group">
                            <label for="fullName">Full Name</label>
                            <input type="text" id="fullName" className="form-control bg-light" value={loggedInUser.name}/>
                        </div>
                        <div className="form-group">
                            <label for="email">Email</label>
                            <input type="text" name="user[email]" id="email" className="form-control bg-light" value={loggedInUser.email}/>
                        </div>

                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label for="to">To</label>
                                <input type="date" name="toDate" onChange={handleCheckInDate} className="form-control bg-light" id="to" required/>
                            </div>
                            <div className="form-group col-md-6">
                                <label for="from">From</label>
                                <input type="date" name="fromDate" onChange={handleCheckOutDate} className="form-control bg-light" id="from" required/>
                            </div>
                        </div>
                        <div className="form-group">
                        <label for="fullName">Your Duty</label>
                        <input type="name" className="form-control bg-light" id="" value={duty.name}/>
                        </div>
                        <div className="form-group">
                        <label for="fullName">Description</label>
                        <input type="description" name="description" onBlur={handleBlur} className="form-control bg-light" id="" placeholder="Write here, what you want to do for it." required/>
                        </div>
                        
                     <input type="submit" className="btn btn-primary col-md-10"/>
  </div>
  </div>
</form>
</>
        
    );
};

export default Register;