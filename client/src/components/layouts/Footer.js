import React, { Component } from 'react';
import {div, Button } from 'react-bootstrap/lib/';

class Footer extends Component {
    render() {
        return (
            <div style={{ paddingTop : 50}} className="text-center">
                <p>
                "L'architecture, c'est une tournure d'esprit et non un métier" 
                </p> 
                <p>
                Copyright©
                </p>              
            </div>
        )
    }
}

export default Footer;
