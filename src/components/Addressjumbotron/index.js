import React from 'react';
import "./style.css"
import Row from '../Row';
import Col from '../Col';
import Container from '../Container';




function Addressjumbotron() {
    return (

        <div className=" addressjumbo" style={{ width: "100vw" }}>
            <Container >
                <Row >
                    <Col size="md-3" className="address ml-3 mr-2 text-center"  >
                        <h1 >Address</h1>
                        <h2>6345 Murray Pkwy Ave</h2>
                        <h2> Murray, UT 84123</h2>
                    </Col>

                    <Col size="md-3" className="address ml-1 mr-2 text-center"  >
                        <h1 >Address</h1>
                        <h2>6345 Murray Pkwy Ave</h2>
                        <h2> Murray, UT 84123</h2>
                    </Col>

                    <Col size="md-3" className="addressnoline ml-1 mr-2 text-center"  >
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