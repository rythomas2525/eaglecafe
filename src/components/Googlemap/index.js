import React from 'react';
import { Link } from 'react-router-dom'
import "./style.css"
import Col from '../Col';
import Row from '../Row';
import "./style.css"



function Googlemap() {
    return (
        <div id="googleMapContainer" class="homepage-google-map">
            <iframe title="Our location on Google My Maps" class="google-map" src="https://www.google.com/maps/d/u/0/embed?mid=15AXGWNu8x-1zue4t_3ssxyQAu3UhziTX"></iframe>
        </div>
    );
};

export default Googlemap;