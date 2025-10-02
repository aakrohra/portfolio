import './Head.css';

import React, { useState } from 'react';
import { JackInTheBox } from "react-awesome-reveal";

import headshot from '../../assets/headshot.jpg';

function Head() {
    const [pfp, setPfp] = useState(false);
    function pfpClick() {
        setPfp(prev => !prev);
    }
    return (
        <div>
            <div className='all'>
                <span className="header">Sensory Memory </span>
                <span className="subheader"><a className="clickabletext" onClick={pfpClick}>Aakaash Rohra</a>'s Digital Portfolio </span>
            </div>
                {pfp && <JackInTheBox><div className="headshot"><img width="560" height="560" src={headshot}/></div></JackInTheBox>}
        </div>
    );
}

export default Head;