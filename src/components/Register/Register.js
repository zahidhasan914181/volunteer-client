import React, { useContext, useState } from 'react';
import './Register.css'
import logo from '../../logos/Group 1329.png';
import { UserContext } from '../../App';

const Register = () => {
    const [loggedInUser, setLoggedInUser ] = useContext(UserContext);
    const [volunteer, setVolunteer] = useState([]);

    const handleRegister = () => {
        const newVolunteer = {...loggedInUser, ...volunteer}
        fetch('http://localhost:4000/addVolunteer', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newVolunteer)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }
    return (
        <div className="bgColor">
        <img src={logo} className="logo" alt=""/>
         <div className="login container">
         <div className="register">
            <h4>Register as a volunteer</h4>
            <form action="/addVolunteer" method="post">
                <input type="text" className="form-control mb-3" placeholder="Full Name" required/>
                <input type="email" className="form-control mb-3" placeholder="Email" required/>
                <input type="text" className="form-control mb-3" placeholder="Date" required/>
                <input type="text" className="form-control mb-3" placeholder="Description" required/>
                <input type="text" className="form-control mb-3" placeholder="Organize books at the library." required/>
                <input type="submit" onClick={handleRegister} className="form-control mb-3 btn-primary" value="Register"/>
            </form>
         </div>
     </div>
    </div>
    );
};

export default Register;