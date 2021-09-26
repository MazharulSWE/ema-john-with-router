import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone } from '@fortawesome/free-solid-svg-icons';
import './Conference.css';

const Conference = (props) => {
    console.log(props);
    const {img, name,Nationality, designation, fees, book, institution} = props.scholar;
    const element = <FontAwesomeIcon icon={faMicrophone} />
    return (
        <div className= "card">
               <img src= {img} alt="" />
               <h3>Name: {name} </h3>
               <p>Nationality: {Nationality} </p>
               <p>Designation: {designation} </p>
               <p>Fees(Hadiya):$ {fees} </p>
               <p>Autor of: {book} </p>
               <p>Institution: {institution} </p>
               <button onClick= {() => props.addToConference(props.scholar)} className="add-btn">Add to Conference {element}</button>
        </div>
    );
};

export default Conference;