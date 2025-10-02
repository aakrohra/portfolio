import { Outlet } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import NavBar from "../../components/NavBar/NavBar";

const csBar = [{to: "/cs/quiz90", label: "Quiz 90: Trivia Quiz Platform"},
                {to: "/cs/drmario", label: "Dr. Mario Recreation in MIPS Assembly"},
                {to: "/cs/songrec", label: "Music Recommendation System"}]

function CS() {
    return (
        <>
            <Fade duration={700} triggerOnce>
                <NavBar navlinks={csBar} />
                <Outlet />
            </Fade>
        </>
    )
}

export default CS;