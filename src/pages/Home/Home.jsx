import './Home.css';

import { Fade } from "react-awesome-reveal";

function Home() {
    return (
        <>
            <Fade duration={700} triggerOnce>
                <div className="homecontent">
                    <p className="hometext">My name is Aakaash, and this is my digital portfolio made with Vite + React. I am a 3rd year
                        student at the University of Toronto studying Computer Science and English. I spend my time outside of those fields
                        on my music projects and graphic design work. <br></br><br></br> You can click on my name at the top of this page to see me, and click on me for my LinkedIn page. 
                    </p>
                </div>
            </Fade>
        </>
    )
}

export default Home;