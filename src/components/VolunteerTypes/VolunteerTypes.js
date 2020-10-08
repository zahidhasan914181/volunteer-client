import React from 'react';
import { useHistory } from 'react-router-dom';
import './VolunteerTypes.css'


const VolunteerTypes = (props) => {
    const {name, img} = props.volunteer;
    const history = useHistory();
    const handleVolunteerClick = () => {
        history.push('/register')
    }
    return (
            <div className="col-md-3 mb-5">
               <div onClick={handleVolunteerClick}>
               <img className="vol-img" src={require(`../FakeData/images/${img}`)} alt=""/>
                <h3>{name}</h3>
               </div>
            </div>
    );
};

export default VolunteerTypes;