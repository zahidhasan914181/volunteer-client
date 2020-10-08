import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logos/Group 1329.png'
import './Header.css'

const Header = () => {
    return (
        <div className="bg-secondary pb-5 mb-3 text-center">
            <nav className="navbar navbar-expand-lg navbar-light">
               <div className="container">
               <a className="navbar-brand" href="#">
                    <img className='logo' src={logo} alt=""/>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link to="/home"><a className="nav-link" href="#">Home</a></Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Donation</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Events</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Blog</a>
                        </li>
                        <Link to="/register"><button className="btn btn-primary mx-3">Register</button></Link>
                        <Link to="/admin"><button className="btn btn-success">Admin</button></Link>
                    </ul>
                </div>
               </div>
            </nav>
            <div className="head-title mt-5">
                <h1>I GROW BY HELPING PEOPLE IN NEED</h1>
              <div className="search-bar mt-5">
              <input type="text" className="search" placeholder="search.." />
               <button className="btn btn-primary ml-3">Search</button>
              </div>
            </div>
        </div>
    );
};

export default Header;