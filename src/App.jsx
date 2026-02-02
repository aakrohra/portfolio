import { Routes, Route } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

import Head from './components/Head/Head';
import NavBar from "./components/NavBar/NavBar";
import CS from "./pages/CS/CS";
import Music from "./pages/Music/Music";
import Art from './pages/Art/Art';
import Resume from './pages/Resume/Resume';
import Home from './pages/Home/Home';
import InFramings from './pages/Music/InFramings';
import Derwin from './pages/Music/Derwin';
import Mache from './pages/Music/Mache';
import MusicBlob from './pages/Music/MusicBlob';
import MarioProject from "./pages/CS/MarioProject";
import TriviaProject from "./pages/CS/TriviaProject";
import SongRecProject from "./pages/CS/SongRecProject";
import CSBlob from './pages/CS/CSBlob';

const homeLinks = [{to: "/", label: "Home"},
                   {to: "/cs", label: "CS"},
                   {to: "/music", label: "Music"},
                   {to: "/art", label: "Art/Graphics"},
                   {to: "/resume", label: "Resume"}]

function App() {
    return (
        <>
            <main style={{ flex: 1 }}>
                <Fade cascade damping={0.5} triggerOnce>
                    <Head />
                    <NavBar navlinks={homeLinks} />
                    <div className="vertical-line"></div>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path="/cs" element={<CS />}>
                            <Route path='/cs' element={<CSBlob />} />
                            <Route path='/cs/quiz90' element={<TriviaProject />} />
                            <Route path='/cs/drmario' element={<MarioProject />} />
                            <Route path='/cs/songrec' element={<SongRecProject />} />
                        </Route>
                        <Route path="/music" element={<Music />}>
                            <Route path='/music' element={<MusicBlob />} />
                            <Route path='/music/inf' element={<InFramings />} />
                            <Route path="/music/mache" element={<Mache />} />
                            <Route path="/music/derwin" element={<Derwin />} />
                        </Route>
                        <Route path='/art' element={<Art />} />
                        <Route path='/resume' element={<Resume />} />
                    </Routes>
                </Fade>
            </main>
        </>
    );
}

export default App;