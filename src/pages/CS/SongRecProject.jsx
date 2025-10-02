import './CS.css';
import songRecsImg from '../../assets/song-rec-pdf.jpg';

import { Fade } from "react-awesome-reveal";

function SongRecProject() {
    return (
        <>
            <Fade duration={700} triggerOnce>
                <div className="project">
                    <img className="projectImg" width="1090" height="824" src={songRecsImg}/>
                    <p className='projectText'>A system that generates graph structures to rank songs from
                        a dataset according to a variety of factors (genre, energy, etc.). Provides a
                        list of recommendations for the user based on an inputted song.<br></br><br></br>
                        Project files can be found in the <a target='_blank' className="github-link" href="https://github.com/aakrohra/MusicRecSystem">Github Repo</a>. 
                    </p>
                </div>
            </Fade>
        </>
    )
}

export default SongRecProject;