import bandImage from '../../assets/05_20250701-band-min.jpg';

import './Music.css';

import { Fade } from "react-awesome-reveal";

function InFramings() {
    return (
        <Fade duration={700} triggerOnce>
            <div className="band">
                    <img className="bandImage" width="3" height="2" src={bandImage} />
                <p className='bandText'>In Framings is an indie rock band I started 4 years ago. It has
                    served as my main creative outlet and a chance to lead a project, connect with
                    a local community, and grow as both a musician and organizer. As the primary contact
                    for booking and events, I learned the value of professionalism, clear communication,
                    and networking in a fast-moving scene.
                    
                    <br></br>You can listen to the In Framings EP <i>Painted Over Portraits</i> below.<br></br><br></br>Photo by Cole London. Edited by me.
                </p>
            </div>
            <div className="spotifyWrapper">
                <iframe 
                    src="https://open.spotify.com/embed/album/0Jo79HhLVmwsWeczODsuff?utm_source=generator"
                    allow="encrypted-media"
                    title="Derwin EP"
                    frameBorder="0"
                    width="450"
                    height="380"
                />
            </div>
        </Fade>
    )
}

export default InFramings;