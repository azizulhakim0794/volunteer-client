import React, { useContext, useState } from 'react';
import './Login.css'
import logo from'../../images/logos/Group 1329.png'
import google from '../../images/logos/google.png'
import "firebase/auth";
import firebase from 'firebase/app';
import firebaseConfig from './firebase.config'
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import {initializeLoginFramework } from './LoggedInUser';

const Login = () => {

    const [loggedInUser , setLoggedInUser] = useContext(UserContext)
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    // if(redirect){
    //   history.replace(from);
  // }
    initializeLoginFramework()

     const handleGoogleLogin = () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider)
      .then(function(result) {
          // console.log(result.user)
          const { displayName, email , photoURL,uid } = result.user;
          const signedInUser = {
            isSignedIn:true, 
            name: displayName,
             email:email,
              photo: photoURL,
            duty:[],
          uid:uid }
              setLoggedInUser(signedInUser)
              authToken()
        })
        .catch(function(error) {
          // Handle Errors here.
          const errorMessage = error.message;
          console.log(errorMessage)
          const email = error.email;
          // ...
        });
       if(loggedInUser.isSignedIn = true){
        history.replace(from);
       }
  }

  const authToken = () =>{
    firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
    .then(function(idToken) {
      // Send token to your backend via HTTPS
      sessionStorage.setItem('token', idToken)
    }).catch(function(error) {
      // Handle error
    });
  }
    return (
        <>
        <img src={logo} className="logo-img" alt=""/>
        <div className="border out-look">
            
            <h2 className="log-head">Login With</h2>
            <div className="frameIcon" onClick={handleGoogleLogin}>
                 <img className='image' src={google} alt=""/> <p className='iconText'>Continue With Google</p>
            </div>
            <p className="text-primary cursor">create a new account</p>
        </div>
        </>
    );
};

export default Login;