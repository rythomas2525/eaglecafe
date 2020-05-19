import React from 'react';
import { Link } from 'react-router-dom'
import "./style.css"
import Col from '../Col';
import Row from '../Row';
import "./style.css"



function Navbar() {
    return (
        <nav className="navbar navbar-expand-xs navbar-success background">

            <h1>Eagle Cafe</h1>

            <Col size="xs-4" >
                <Link className="navbar-brand  d-flex justify-content-center" to="/">
                    Home
      </Link>
            </Col>
            <Col size="xs-4" >
                <Link className="navbar-brand  d-flex justify-content-center" to="/menu">
                    Menu
      </Link>
            </Col>

        </nav >
    );
};

export default Navbar;