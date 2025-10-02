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
                        I have experience with Java, Python, C/C++, JavaScript, HTML, CSS, React, SQL, Assembly, 
                        and Git for version control. I have also taken courses in data structures and analysis,
                        algorithms, software design, systems programming, and computer organization.
                        <br/><br/>
                        Use the navigation bar above for information on my projects.
                    </p>
                </div>
            </Fade>
        </>
    )
}

export default CSBlob;