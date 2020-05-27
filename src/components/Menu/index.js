import React, { Component } from 'react';
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

import Itemcard from '../Itemcard';
import breakfast from '../../breakfast.json'
import lunch from "../../lunch.json"

class Menu extends Component {


    state = {
        breakfast,
        lunch
    };


    render() {

        return (

            <div className="menu" style={{ width: "100vw" }}>

                <Container>
                    <Row style={{ paddingBottom: "200px", paddingTop: "100px" }}>

                        <Col size="md-12">
                            <Breakfastbanner />
                        </Col>

                        {
                            this.state.breakfast.map(breakfast => (
                                <Col size="md-12">
                                    <Itemcard
                                        id={breakfast.id}
                                        key={breakfast.id}
                                        menuItem={breakfast.menuItem}
                                        price={breakfast.price}
                                        description={breakfast.description}
                                        price2={breakfast.price2} />
                                </Col>


                            ))
                        }


                        <Col size="md-12">
                            <Lunchbanner />
                        </Col>
                        {
                            this.state.lunch.map(lunch => (
                                <Col size="md-12">
                                    <Itemcard
                                        id={lunch.id}
                                        key={lunch.id}
                                        menuItem={lunch.menuItem}
                                        price={lunch.price}
                                        description={lunch.description}
                                        price2={lunch.price2} />
                                </Col>


                            ))
                        }

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
    }
};

export default Menu;