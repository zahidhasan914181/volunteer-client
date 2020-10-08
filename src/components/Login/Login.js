import React, { useContext } from 'react';
import google from './google.png';
import logo from '../../logos/Group 1329.png'
import './Login.css'
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';

firebase.initializeApp(firebaseConfig);

const Login = () => {

    const [loggedInUser, setLoggedInUser ] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const provider = new firebase.auth.GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            setLoggedInUser(user);
            history.replace(from);
            // ...
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });
    }
    return (
       <div className="bgColor">
           <img src={logo} className="logo" alt=""/>
            <div className="login container">
            <div className="social">
                <h1>Login With</h1>
                <button onClick={handleGoogleSignIn} className="btn social-signin w-100 my-5"><img src={google} alt=""/>Google Sign In</button>
                <p>Don't have an account?</p> <a href="#">Create a new account</a>
            </div>
        </div>
       </div>
    );
};

export default Login;