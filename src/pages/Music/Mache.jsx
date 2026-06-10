import bandImage from '../../assets/mache-burdock.JPEG';
import './Music.css';

import { Fade } from "react-awesome-reveal";

function Mache() {
    return (
        <Fade duration={700} triggerOnce>
            <div className="band">
                <img className="bandImage" width="3" height="2" src={bandImage} />
                <p className='bandText'>
                    mache was an indie rock/dance punk/new wave band I joined when it started in 2024, and is primarily responsible for getting me into the Toronto music scene. I figured it out, vaguely, through getting to play in this band.
                    <br></br><br></br>Photo by Olivia Dans.
                </p>
            </div>
        </Fade>
    )
}

export default Mache;