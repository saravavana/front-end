import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "./assets/sk1.png";
function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>

      <div className="nav-links">
        <Link to="/Home">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Skills">Skills</Link>
        <Link to="/Project">Project</Link>
        <Link to="/Contact">Contact</Link>
      </div>

    </nav>
  );
}

export default Navbar;