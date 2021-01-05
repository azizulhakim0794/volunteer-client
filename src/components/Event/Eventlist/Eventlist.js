import React, { useState } from 'react';
import './Eventlist.css'

const Eventlist = (props) => {
  // const [loggedInUser , setLoggedInUser] = useContext(UserContext)
  const [data] = useState(props.data)
  const eventHandler = props.dutyDelete
  const allData = {...data, eventHandler}
    const {name , image}  = allData.duty
    const {_id} = props.data
    const {description , checkIn,checkOut}  = allData.selectedDate_data
    return (
        
      <div className="gap card col-md-5">
      <div className="row">
        <div className="col-md-4">
           <img  className='dutyImg' src={image} alt=""/> 
         </div>
         <div className="col-md-8">
           <div className="card-body">
             <h5 className="card-title">{name}</h5>
             <p className="card-text">{description}</p>
             <p>you are join in our project <br/><b><u>{new Date(checkIn).toDateString('dd/MM/yyyy')}</u> to <u>{new Date(checkOut).toDateString('dd/MM/yyyy')}</u></b></p>
             <button className = "btn btn-success "onClick={()=>props.dutyDelete(_id)}>Cancel</button>
           </div>
         </div>
       </div> 
      </div>
       
    );
};

export default Eventlist;