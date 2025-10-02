import Markdown from 'react-markdown';

import React, { useState } from 'react';

import './CS.css';

import drMarioVid from '../../assets/drMario-Playthrough.mov';
import docs from '../../assets/DrMarioDocumentation.md?raw';

function MarioProject() {
    const [md, setMd] = useState(false);
      function mdClick() {
        setMd(prev => !prev);
      }
    return (
        <>
            <div className="project">
                <video controls="controls" className='projectImg' name="Video Name">
                    <source src={drMarioVid}/>
                </video>
                <p className="projectText">A low-level Dr. Mario clone written entirely in MIPS assembly. 
                    <a className="clickabletext" onClick={mdClick}> Click here</a> to view implementation details. </p>
            </div>
            {md &&
                <div className="projectDetails">
                    <Markdown>{docs}</Markdown>
                </div>
            }
        </>
    )
}

export default MarioProject;