import React from 'react';
import { Link } from 'react-router-dom'
import "./style.css"
import Col from '../Col';
import "./style.css"



function Navbar() {
    return (

        <nav className="navbar navbar-expand-xl navbar-light sticky-nav">
            <Link className="navbar-brand eaglecafe navhover justify-content-center  " to="/">
                Eagle Café
                </Link>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <Col size="md-3 lg-2"></Col>
            <div className="collapse  navbar-collapse" id="navbarSupportedContent" >
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className=" navtext mr-4  navhover justify-content-center " to="/">
                            Home
          </Link>
                    </li>
                    <li className="nav-item">
                        <Link className=" navtext  mr-4 navhover justify-content-center" to="/menu">
                            Menu
          </Link>
                    </li>

                    <li className="nav-item">
                        <Link className=" navtext mr-4 navhover justify-content-center" to="/contact">
                            Contact Us
          </Link>
                    </li>


                </ul>

            </div>


        </nav>
    );
};

export default Navbar;