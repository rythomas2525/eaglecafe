import React from 'react';
import { Link } from 'react-router-dom'
import "./style.css"
import Col from '../Col';
import Row from '../Row';
import "./style.css"



function Navbar() {
    return (
        <nav className="navbar navbar-expand-xs  background">


            <Col size="md-1" >
                <Link className="navbar-brand eaglecafe justify-content-center  " to="/">
                    Eagle Cafe
      </Link>

            </Col>
            <Col size="md-4"  >
                <Link className=" navtext m-4 justify-content-center " to="/">
                    Home
      </Link>
                <Link className=" navtext  m-4 justify-content-center" to="/menu">
                    Menu
      </Link>
                <Link className=" navtext m-4 justify-content-center" to="/contact">
                    Contact Us
      </Link>
            </Col>


            <Col size="xs-7"></Col>

        </nav >
    );
};

export default Navbar;