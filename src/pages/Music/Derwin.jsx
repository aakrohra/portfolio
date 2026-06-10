import bandImage from '../../assets/derwin-bampot.JPG';

import './Music.css';

import { Fade } from "react-awesome-reveal";

function Derwin() {
    return (
        <Fade duration={700} triggerOnce>
            <div className="band">
                <img className="bandImage" width="3" height="2" src={bandImage} />
                <p className='bandText'>
                    <a href="https://www.instagram.com/derwinsworld/">Derwin</a> was a garage rock/emo band formed in 2023. Derwin was maybe the most important thing that could have happened for me.
                    You can listen to the Derwin EP <i>Tendon</i> below.<br></br><br></br>Photo by Crystal Zhu.
                    <br></br><br></br>
                </p>
            </div>
            <div className="spotifyWrapper">
                <iframe
                    title="Tendon by Derwin"
                    style={{ border: 0, width: '350px', height: '621px' }}
                    src="https://bandcamp.com/EmbeddedPlayer/album=4268148409/size=large/bgcol=ffffff/linkcol=de270f/transparent=true/"
                />
            </div>
        </Fade>
    )
}

export default Derwin;