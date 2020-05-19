import React from 'react';
import { Link } from 'react-router-dom'
import "./style.css"
import Col from '../Col';
import Row from '../Row';
import "./style.css"



function Navbar() {
    return (
        <nav className="navbar navbar-expand-xs  background">


            <Col size="md-2" >
                <Link className="navbar-brand eaglecafe  " to="/">
                    Eagle Cafe
      </Link>
            </Col>
            <Col size="md-1" >
                <Link className=" navtext  " to="/">
                    Home
      </Link>
            </Col>

            <Col size="md-1" >
                <Link className=" navtext  justify-content-center" to="/menu">
                    Menu
      </Link>
            </Col>
            <Col size="md-2" >
                <Link className=" navtext  justify-content-center" to="/menu">
                    Contact Us
      </Link>
            </Col>
            <Col size="md-6"></Col>

        </nav >
    );
};

export default Navbar;