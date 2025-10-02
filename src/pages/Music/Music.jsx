import { Outlet } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import NavBar from "../../components/NavBar/NavBar";

const musicBar = [{to: "/music/inf", label: "In Framings"},
                  {to: "/music/mache", label: "mache"},
                  {to: "/music/derwin", label: "Derwin"}]

function Music() {
    return (
        <>
            <Fade triggerOnce>
                <NavBar navlinks={musicBar} />
                <Outlet />
            </Fade>
        </>
    )
}

export default Music;