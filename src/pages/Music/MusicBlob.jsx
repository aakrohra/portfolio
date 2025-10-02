import "./Music.css"
import { Fade } from "react-awesome-reveal";

function MusicHome() {
    return (
        <>
            <Fade duration={700} triggerOnce>
                <div className="preambleDiv">
                    <p className="preamble">My goal with music is to express myself creatively while bringing diversity and a fresh
                        perspective to a local scene that, while generally accepting of alternative culture, can struggle with
                        homogeneity and recognizing its biases.
                    </p>
                </div>
            </Fade>
        </>
    )
}

export default MusicHome;