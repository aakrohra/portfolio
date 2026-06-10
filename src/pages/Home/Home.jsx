import './Home.css';

import { Fade } from "react-awesome-reveal";

function Home() {
    return (
        <>
            <Fade duration={700} triggerOnce>
                <div className="homecontent">
                    <p className="hometext">Hi! My name is Aakaash. I am an undergraduate student
                        at the University of Toronto studying Computer Science and English. I am also big on art and such. <br></br><br></br> You can click on my name at the top of this page to see me! 
                    </p>
                </div>
            </Fade>
        </>
    )
}

export default Home;