import "./CS.css"

import { Fade } from "react-awesome-reveal";

function CSBlob() {
    return (
        <>
            <Fade duration={700} triggerOnce>
                <div className="preambleDiv">
                    <p className="preamble">My goal with computer science, beyond enjoying the problem-solving,
                        is to build tools and programs inspired by the passions and interests that shape who I am.
                        <br/><br/>
                        Use the navigation bar above for information on my most notable projects.
                    </p>
                </div>
            </Fade>
        </>
    )
}

export default CSBlob;