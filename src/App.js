import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar"
import Container from "./components/Container"
import Footer from './components/Footer';
import Home from "./pages/home"
import Menu from "./pages/menu"

function App() {
  return (
    <Router>
      <Navbar />
      <Container >
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/menu" component={Menu} />
      </Container>
      <Footer />


    </Router >
  )
}

export default App;
