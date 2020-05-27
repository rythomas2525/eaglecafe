import React from 'react';
import "./style.css"
import Row from '../Row';
import Col from '../Col';
import Container from '../Container';
import Instagram from '../Instagram';
import Baconcheese from "../Baconcheese"
import Breakfastbanner from '../Breakfastbanner';
import Lunchbanner from '../Lunchbanner';
import Sidesbanner from '../Sidesbanner';
import Beveragebanner from '../Beveragebanner';
import Dinnerbanner from '../Dinnerbanner';



function Menu() {
    return (

        <div className="menu" style={{ width: "100vw" }}>

            <Container>
                <Row style={{ paddingBottom: "200px", paddingTop: "100px" }}>

                    <Col size="md-12">
                        <Breakfastbanner />
                    </Col>


                    <Col size="md-12">
                        <Lunchbanner />
                    </Col>
                    <Col size="md-12">
                        <Dinnerbanner />
                    </Col>
                    <Col size="md-12">
                        <Sidesbanner />
                    </Col>
                    <Col size="md-12">
                        <Beveragebanner />
                    </Col>




                </Row>

            </Container>

        </div>

    );
};

export default Menu;