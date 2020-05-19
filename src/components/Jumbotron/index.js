import React from 'react';
import { Link } from 'react-router-dom'
import "./style.css"
import Col from '../Col';
import Row from '../Row';
import "./style.css"



function Jumbotron() {
    return (
        <div class="jumbotron jumbotron-fluid jumbobackground" style={{ width: "100vw" }}>
            <div class="container jumbopadding">
                <h1 class="cafe">Eagle Cafe</h1>

            </div>
        </div>
    );
};

export default Jumbotron;