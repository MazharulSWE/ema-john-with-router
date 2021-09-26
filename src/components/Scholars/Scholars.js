import React, {useEffect, useState} from 'react';
import Cart from '../Cart/Cart';
import Conference from '../Conference/Conference';
import './Scholars.css';

const Scholars = () => {
    const [scholars, setScholars] = useState([]);
    const [conference, setConference] = useState([]);


    useEffect(() =>{
        fetch('./data.JSON')
        .then(res => res.json())
        .then (data => setScholars(data))

    },[])
     
    // adding handle
       const addToConference = (scholar) => {
        //    console.log(scholar.name);
        //spread operator
        const newConference = [...conference, scholar];
        setConference(newConference);
       }

    return (
        <div className= "scholars-container">
            <div className="details-container">
                    {
                         scholars.map(scholar =>  <Conference 
                            key ={scholar.name}
                            scholar= {scholar}
                            addToConference ={addToConference}
                            ></Conference>)
                     }
            </div>
            <div className="calculate-container">
                     <Cart conference={conference}></Cart>
            </div>
            
        </div>
    );
};

export default Scholars;