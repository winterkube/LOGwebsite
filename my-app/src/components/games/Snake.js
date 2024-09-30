
import '../Games.css';

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // If you're using React Router

import logoImage from "../images/log logo.png";

function Snake() {
    return (
        <div className="snake">

            <div id="logo" style={{textAlign: 'center'}}>
                <img src={logoImage} alt="Logo" height={250}/>
            </div>

            <h4> SNAKE (but harder) </h4>

        </div>

    );
}

export default Snake;