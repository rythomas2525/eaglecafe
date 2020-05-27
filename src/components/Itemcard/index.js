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
            <img className="rounded-circle bg-white mt-4 baconcheeseround" alt="Bacon Cheeseburger" src={baconcheese} />
            <h1>Hello World</h1>

        </div>

    );
};

export default Itemcard;