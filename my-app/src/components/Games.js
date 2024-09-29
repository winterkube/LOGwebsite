import React from 'react';
import '../App.css';
import './Games.css';

import logoImage from "./images/log logo.png";
import constructImage from './images/construct.png';

function Games() {
    return (
        <div className="games">

            <div id="logo" style={{textAlign: 'center'}}>
                <img src={logoImage} alt="Logo" height={300}/>
            </div>

            <h4> GAMES </h4>

            <div id="construct" style={{textAlign: 'center'}}>
                <img src={constructImage} alt="Under Construction" height={270}/>
            </div>

            <h6><b> UNDER <br/> CONSTRUCTION </b></h6>

        </div>

    );
}

export default Games;