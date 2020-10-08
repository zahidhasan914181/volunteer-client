import React from 'react';
import FakeData from '../FakeData/FakeData'
import VolunteerTypes from '../VolunteerTypes/VolunteerTypes';
import Header from '../Header/Header'


const Home = () => {
    return (
        <>
            <Header></Header>
            <div className="container">
           <div className="row">
           {
                FakeData.map(volunteer => <VolunteerTypes volunteer={volunteer}></VolunteerTypes>)
            }
           </div>
        </div>
        </>
    );
};

export default Home;