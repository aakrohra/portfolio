import bandImage from '../../assets/mache-burdock.JPEG';
import './Music.css';

import { Fade } from "react-awesome-reveal";

function Mache() {
    return (
        <Fade triggerOnce>
            <div className="band">
                <img className="bandImage" width="3" height="2" src={bandImage} />
                <p className='bandText'>
                    mache is an indie rock band I joined when it started 2 years ago. It taught me a great deal
                    about collaborating with new people, and introduced me to a vibrant local creative community.
                    The band’s growing local presence has helped me build a network of creatives that I tap into frequently.
                    <br></br><br></br>mache has played a number of benefit, charity, and diversity shows.<br></br><br></br>Photo by Olivia Dans.
                </p>
            </div>
        </Fade>
    )
}

export default Mache;