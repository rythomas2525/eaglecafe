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
                    {/* <Baconcheese /> */}

                    <p>
                        Deep v keytar ennui try-hard raclette. Literally cred unicorn 90's organic tumeric raclette cray listicle messenger bag before they sold out. Banjo distillery everyday carry iceland, live-edge readymade taxidermy pop-up normcore street art blue bottle. Brunch pour-over jianbing meggings vexillologist banjo aesthetic williamsburg small batch everyday carry +1 sustainable offal. Master cleanse cardigan venmo hammock plaid gastropub post-ironic dreamcatcher man bun humblebrag heirloom art party retro vegan vape. Palo santo dreamcatcher polaroid skateboard mixtape whatever portland taiyaki blue bottle.
                    </p>
                    <p>
                        Green juice lyft polaroid sustainable mlkshk mustache, +1 direct trade tumeric humblebrag banh mi ugh brunch. Kombucha shabby chic crucifix actually affogato tilde banh mi 3 wolf moon. Farm-to-table schlitz cornhole man braid activated charcoal. Roof party photo booth scenester air plant. Butcher meditation yr succulents, cray shabby chic truffaut green juice fixie celiac. Normcore messenger bag jean shorts, seitan single-origin coffee chambray stumptown actually tumeric.
                        Dummy text? More like dummy thicc text, amirite?
</p>

                </Row>

            </Container>

        </div>

    );
};

export default Menu;