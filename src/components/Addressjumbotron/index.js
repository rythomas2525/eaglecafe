import React from 'react';
import "./style.css"
import Row from '../Row';
import Col from '../Col';
import Container from '../Container';




function Addressjumbotron() {
    return (

        <div className=" addressjumbo" style={{ width: "100vw" }}>
            <Container >
                <Row>
                    <Col size="md-4"></Col>
                    <Col size="md-4">
                        <h1 className="cafeaddress text-center mt-4">Eagle Café</h1>
                    </Col>
                    <Col size="md-4"></Col>
                </Row>
                <Row >
                    <Col size="md-4" className="address ml-4 mr-2 text-center"  >
                        <h1 >Address</h1>
                        <h2>6345 Murray Pkwy Ave</h2>
                        <h2> Murray, UT 84123</h2>
                    </Col>

                    <Col size="md-4" className="address ml-1 mr-2 text-center"  >
                        <h1 >Address</h1>
                        <h2>6345 Murray Pkwy Ave</h2>
                        <h2> Murray, UT 84123</h2>
                    </Col>

                    <Col size="md-4" className="addressnoline ml-1  text-center"  >
                        <h1 >Address</h1>
                        <h2>6345 Murray Pkwy Ave</h2>
                        <h2> Murray, UT 84123</h2>
                    </Col>
                </Row>
            </Container>
        </div>

    );
};

export default Addressjumbotron;