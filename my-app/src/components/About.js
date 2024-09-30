import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import './About.css';

import logoImage from "./images/log logo.png";
import constructImage from './images/construct.png';
import hexaUpload from "./images/hexaupload.png";
import hexaOpen from "./images/hexaopen.png";
import hexaFree from "./images/hexafree.png";

function About() {
    return (
        <div className="about">

            <div id="logo" style={{textAlign: 'center'}}>
                <img src={logoImage} alt="Logo" height={250}/>
            </div>

            <h4> About LOG </h4>

            <h1> LOG ("League Of Griefers") is a programming project created by a group of friends in Canada,
                as a means to help video game developers/players thrive together in a free, public and supportive environment. </h1>

            <h3>  <br/>  <br/>  <br/>  </h3>

            <div id = "hexaupload">
                <img src={hexaUpload} alt="Logo" height={220}/>
                <h7> UPLOAD <br/> </h7>
                <h8> Anyone can contribute and upload their very own games for others to play in the ‎
                    <Link to="/games" title="Games">
                         games
                    </Link>
                    ‎ section. Make sure it is compatible with HTML!</h8>

            </div>

            <div id = "hexaopen">
                <img src={hexaOpen} alt="Logo" height={220}/>
                <h7> OPEN SOURCE <br/> </h7>
                <h8> LOG is open source for everyone and can be viewed at our public github ‎

                    <Link to="https://github.com/winterkube/LOGwebsite" title="Github">
                        repository.
                    </Link>

                    ‎ Devs can choose to upload and keep their games as open source or closed. </h8>

            </div>

            <div id = "hexafree">
                <img src={hexaFree} alt="Logo" height={220}/>
                <h7> FREE <br/> </h7>
                <h8> LOG is a non-profit project. We strive for our platform to be as accessible as possible to everyone! </h8>

            </div>

            <h6> LOG STAFF </h6>

            <h1>
               Riley Su
            </h1>


        </div>

    );
}

export default About;