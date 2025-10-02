import './Home.css';

import { Fade } from "react-awesome-reveal";

function Home() {
    return (
        <>
            <Fade triggerOnce>
                <div className="homecontent">
                    <p className="hometext">My name is Aakaash, and this is a digital portfolio coded in React.js showcasing my passions. I am a 3rd year
                        student at the University of Toronto studying Computer Science and English. I spend my time outside of those fields
                        on my music projects and graphic design work. <br></br><br></br> I've titled this collection "Sensory Memory", an idea I've grown attached to. Hopefully
                        something you see here will stick around for longer, but at least you will have learned a little about who I am. <br></br><br></br>Have a good day.
                    </p>
                </div>
            </Fade>
        </>
    )
}

export default Home;