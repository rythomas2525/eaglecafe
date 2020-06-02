import React from "react";
import Row from "../components/Row"
import Container from "../components/Container";
import Jumbotroneagle from "../components/Jumbotroneagle";
import Jumbotrongolf from "../components/Jumbotrongolf";
import Googlemap from "../components/Googlemap";







function Home() {


    return (

        <div >
            <Jumbotroneagle />
            <Container>
                <Row className="text-center" style={{ paddingBottom: "200px", paddingTop: "100px" }}>
                    <h1 style={{ fontSize: "120px" }}>FULL WEBSITE COMING SOON!!!!</h1>
                </Row>

            </Container>
            <Jumbotrongolf />
            <Googlemap />
        </div >
    )


}

export default Home;