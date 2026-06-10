import bandImage from '../../assets/rsd.jpg';
import './Music.css';

import { Fade } from "react-awesome-reveal";

function RobertStreetDemos() {
    return (
        <Fade duration={700} triggerOnce>
            <div className="band">
                <img className="bandImage" width="3" height="2" src={bandImage} />
                <p className='bandText'>Robert Street Demos was a way to release 11 songs (ultimately polished demos) I wrote over the year I spent living on Robert Street, 2025-2026.
                    <br></br><br></br>These songs are deeply personal to me, made possible by the fact that (other than a few friend features) I wrote/recorded/mixed them myself. 
                    <br></br><br></br>It's a lyrical project, and my best attempt (so far) at the whole instrumentals-support-the-emotions idea I mentioned on the music landing page.
                    <br></br><br></br>You can listen to the Robert Street Demos LP <i>Ornaments</i> below.
                </p>
            </div>
            <div className="spotifyWrapper">
                <iframe
                    title="Ornaments by Robert Street Demos"
                    style={{ border: 0, width: '350px', height: '600px' }}
                    src="https://bandcamp.com/EmbeddedPlayer/album=287045463/size=large/bgcol=ffffff/linkcol=e99708/transparent=true/"
                />
            </div>
        </Fade>
    )
}

export default RobertStreetDemos;