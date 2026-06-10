import bandImage from '../../assets/05_20250701-band-min.jpg';

import './Music.css';

import { Fade } from "react-awesome-reveal";

function InFramings() {
    return (
        <Fade duration={700} triggerOnce>
            <div className="band">
                    <img className="bandImage" width="3" height="2" src={bandImage} />
                <p className='bandText'><a href="https://www.instagram.com/inframings/">In Framings</a> is an emo band (2nd/4th-wave inspired) I started in 2022. It's been
                    my main creative and emotional outlet. You can listen to the In Framings EP <i>Painted Over Portraits</i> below.<br></br><br></br>Photo by Cole London. Edited by me.
                </p>
            </div>
            <div className="spotifyWrapper">
                <iframe
                    title="Painted Over Portraits by In Framings"
                    style={{ border: 0, width: '350px', height: '588px' }}
                    src="https://bandcamp.com/EmbeddedPlayer/album=3816890407/size=large/bgcol=333333/linkcol=e99708/transparent=true/"
                >
                </iframe>
            </div>
        </Fade>
    )
}

export default InFramings;