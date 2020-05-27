import React from 'react';
import "./style.css"
import Row from '../Row';
import Col from '../Col';
import Container from '../Container';
import Instagram from '../Instagram';
import Baconcheese from '../Baconcheese'
import baconcheese from "./baconcheese.jpg"


function Itemcard() {
    return (

        <div className="itemcard text-center justify-content-center">
            <hr></hr>

            <h1>Bacon Cheeseburger</h1>
            <h2>Price: $10</h2>

        </div>

    );
};

export default Itemcard;