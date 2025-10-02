import { Outlet } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";

const csBar = [{to: "/cs/quiz90", label: "Quiz 90: Trivia Quiz Platform"},
                {to: "/cs/drmario", label: "Dr. Mario Recreation in MIPS Assembly"},
                {to: "/cs/songrec", label: "Music Recommendation System"}]

function CS() {
    return (
        <>
            <NavBar navlinks={csBar} />
            <Outlet />
        </>
    )
}

export default CS;