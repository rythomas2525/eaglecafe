import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar"
import Container from "./components/Container"
import Footer from './components/Footer';
import Overlay from './components/Overlay';
import Home from "./pages/home"


function App() {
  return (
    <Router>
      <Navbar />
      <Container >
        <Route exact path="/" component={Home} />
      </Container>
      <Footer />
    </Router >
  )
}

export default App;
