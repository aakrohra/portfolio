import './CS.css';

import projectImageA from '../../assets/drmario.jpg';
import projectImageB from '../../assets/drmario_game_over.jpg';

function MarioProject() {
    return (
        <>
            <div className="project">
                <img className="projectImg" src={projectImageA} />
                <img className="projectImg" src={projectImageB} />
                <p className='projectText'>A fully playable low-level Dr. Mario clone written entirely in MIPS assembly. Through creating this, I developed an understanding of memory-mapped I/O and pixel-level graphics.
                    <br></br><br></br>The project files and a README containing features and implementation details can be found in the <a target='_blank' className="github-link" href="https://github.com/aakrohra/DrMario-MIPS-Assembly">Github Repo</a>. 
                </p>
            </div>
        </>
    )
}

export default MarioProject;