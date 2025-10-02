import ArtGallery from "../../components/ArtGallery/ArtGallery";

import './Art.css';

import { Fade } from "react-awesome-reveal";

function Art() {
    return (
        <Fade duration={700} triggerOnce>
            <div className="content">
                <p className='text'>Edits and graphic designs created as promotional material for my music projects. Photos taken by me, Valentina Gheorghe, or Anisha Rohra.</p>
                <ArtGallery />
            </div>
        </Fade>
    )
}

export default Art;