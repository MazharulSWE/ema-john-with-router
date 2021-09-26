import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const {conference} = props;
    let total = 0;
    let name = "";
    for (const scholar of conference) {
        total = total  + scholar.fees;
        name = name +  scholar.name +", ";
    }
    return (
        <div>
                   <h1>Conference details & Cost</h1>
                   <h2>Total Selected: {props.conference.length} </h2>
                   <p style=  {{color:"orangered"}}>Selected Scholars Names: {name}</p>
                   <h2>Total Fees:$ {total} </h2>
        </div>
    );
};

export default Cart;