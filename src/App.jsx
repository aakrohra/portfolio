import { Routes, Route } from "react-router-dom";
import Head from './components/Head/Head';
import NavBar from "./components/NavBar/NavBar";
import CS from "./pages/CS/CS";
import Music from "./pages/Music/Music";
import Art from './pages/Art/Art';
import Home from './pages/Home/Home';
import Footer from "./components/Footer/Footer";
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
                   {to: "/art", label: "Art/Graphics"}]

function App() {
  return (
    <>
      <Head />
      <NavBar navlinks={homeLinks} />
      <main style={{ flex: 1 }}>
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
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;