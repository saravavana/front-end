// import Navbar from "./Navbar.jsx";
// import c from './assets/c.jpg';
// import cplus from './assets/c++.jpg';
// import csharp from './assets/c sharp.jpg';
// import dj from './assets/django.jpg';
// import java from './assets/java.jpg';
// import numpy from './assets/numpy.jpg';
// import php from './assets/php.jpg';
// import python from './assets/python.jpg';
// function App(){
//   return(
//     <>
//     <Navbar img={c} name="C" price="$199" />
//     <Navbar img={cplus} name="C" price="$299" />
//     <Navbar img={csharp} name="C" price="$109" />
//     <Navbar img={dj} name="C" price="$300" />
//     <Navbar img={java} name="C" price="$99" />
//     <Navbar img={numpy} name="C" price="$109" />
//     <Navbar img={php} name="C" price="$499" />
//     <Navbar img={python} name="C" price="$799" />


//     </>
//   )
// }
// export default App
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Navbar.jsx';
import Home from './Home.jsx';
import About from './About.jsx';
import Skills from './Skills.jsx';
import Project from './Project.jsx';
import Contact from './Contact.jsx';
import './App.css';
function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/Home" element={<Home />} />
                    <Route path="/About" element={<About />} />
                    <Route path="/Skills" element={<Skills />} />
                    <Route path="/Project" element={<Project />} />
                    <Route path="/Contact" element={<Contact />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default App