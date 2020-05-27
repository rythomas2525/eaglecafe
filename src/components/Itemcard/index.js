import React from 'react';
import "./style.css"
import Row from '../Row';
import Col from '../Col';
import Container from '../Container';
import Instagram from '../Instagram';
import Baconcheese from '../Baconcheese'
import baconcheese from "./baconcheese.jpg"
import breakfast from "../../breakfast.json"

function Itemcard(props) {
    return (

        <div className="itemcard text-center justify-content-center">
            <hr></hr>

            <h1>{props.menuItem}</h1>
            <h1>{props.price}</h1>
            <h3>{props.description}</h3>
            <h2>{props.price2}</h2>
        </div>

    );
};

export default Itemcard;