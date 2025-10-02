import './CS.css';

import projectImageA from '../../assets/trivia_shared.jpg';
import projectImageB from '../../assets/trivia_create.jpg';

import { Fade } from "react-awesome-reveal";

function TriviaProject() {
    return (
        <>
            <Fade duration={700} triggerOnce>
                <div className="project">
                    <img className="projectImg" width="1848" height="1872" src={projectImageA}/>
                    <img className="projectImg" width="1800" height="1056" src={projectImageB}/>
                    <p className='projectText'>A trivia quiz system to play pre-built or user-created quizzes with 1- and 2- player local functionality.
                        Created in Java with a structure following Clean Architecture. <br></br><br></br>
                        My individual contributions were related to custom quizzes: key input functionality, 
                        quiz access from API, and quiz creation logic. My team contributions were assisting 
                        with quiz playthrough logic and UIs. Project files and a detailed README can be found in the <a target='_blank' className="github-link" href="https://github.com/aakrohra/Quiz90TriviaGame">Github Repo</a>. 
                    </p>
                </div>
            </Fade>
        </>
    )
}

export default TriviaProject;