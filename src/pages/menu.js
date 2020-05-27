import React from "react";
import Row from "../components/Row"
import Container from "../components/Container";
import Googlemap from "../components/Googlemap";
import Jumbotronmenu from "../components/Jumbotronmenu";
import Jumbotronmenusecond from "../components/Jumbotronmenusecond";
import Baconcheese from "../components/Baconcheese";
import Menu from "../components/Menu"







function menu() {


    return (

        <div >
            <Jumbotronmenu />
            <Menu />
            <Jumbotronmenusecond />
            <Googlemap />
        </div >
    )


}

export default menu;