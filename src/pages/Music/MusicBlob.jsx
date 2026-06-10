import "./Music.css"
import { Fade } from "react-awesome-reveal";

function MusicHome() {
    return (
        <>
            <Fade duration={700} triggerOnce>
                <div className="preambleDiv">
                    <p className="preamble">Music as an art form is extremely important to me. I see myself today primarily as a lyricist, but this hasn't always been true. In any case, instrumentals (in how they surround the vocals and lyrics, in my style of music, in what I get out of it all) are a really interesting way of deepening meaning and communicating emotion outside of words (other than just being fun).
                        <br></br><br></br>The community is a big part of it too. I've gotten to be part of such a breadth of scenes and I've loved seeing how interconnected they can all be.
                        <br/><br/>
                        Use the navigation bar above for more info on each project.
                    </p>
                </div>
            </Fade>
        </>
    )
}

export default MusicHome;