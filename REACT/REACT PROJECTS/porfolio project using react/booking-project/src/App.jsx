
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
                    <Route path="/" element={<Home />} />
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