import { Slide } from "react-awesome-reveal";

import './Resume.css';

import resume from '../../assets/resume.jpg';

function Resume() {
    return (
        <>
            <Slide direction="left" triggerOnce>
                <div className="resumeDiv">
                    <img className="resumeImg" width="8.5" height="11" src={resume}/>
                </div>
            </Slide>
        </>
    )
}

export default Resume;