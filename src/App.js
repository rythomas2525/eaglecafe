import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar"
import Footer from './components/Footer';
import Home from "./pages/home"
import menu from "./pages/menu"
import Contact from "./pages/contact"
import Addressjumbotron from './components/Addressjumbotron';


function App() {






  return (
    <Router>
      <Navbar />

      <Route exact path="/" component={Home} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/menu" component={menu} />
      <Route exact path="/contact" component={Contact} />
      <Addressjumbotron />
      <Footer />


    </Router >
  )

}

export default App;
