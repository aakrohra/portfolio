import './Head.css';

import React, { useState } from 'react';
import { JackInTheBox } from "react-awesome-reveal";

import headshot from '../../assets/me.jpeg';

function Head() {
    const [pfp, setPfp] = useState(false);
    function pfpClick() {
        setPfp(prev => !prev);
    }
    return (
        <div>
            <div className='all'>
                <span className="header">WEBSITE! </span>
                <span className="subheader">
                    <a className="clickabletext" onClick={pfpClick}>Aakaash Rohra</a>'s...
                </span>
            </div>
            {pfp && 
                <JackInTheBox>
                    <div className="headshotContainer">
                        <a href="https://www.instagram.com/aakrohra/" target="_blank">
                            <img className="headshot" width="560" height="560" src={headshot}/>
                        </a>
                    </div>
                </JackInTheBox>
            }
        </div>
    );
}

export default Head;