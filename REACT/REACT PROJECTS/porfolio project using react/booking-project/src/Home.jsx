import { TypeAnimation } from "react-type-animation";
import "./Home.css";
import home from "./assets/home id.jpeg";

function Home() {
  return (
    <div className="main">

      {/* LEFT CONTENT */}
      <div className="left">

        <h1>
          Hello, I'm <span>Saravana Kumar</span>
        </h1>

        <TypeAnimation
          sequence={[
            "Front-End Developer",
            2000,
            "Full Stack Developer",
            2000,
          ]}
          wrapper="h2"
          speed={50}
          repeat={Infinity}
        />

        <h3>
          BSc Computer Science Graduate. Passionate Full Stack Developer
          who loves to create modern and scalable web applications.
        </h3>

        <div id="buttons">

          <button id="one">
            Hire Me
          </button>

          <button id="two">
            Download CV
          </button>

        </div>

        <div className="social-icons">

          <a href="https://github.com/saravavana" target="_blank">
            <i className="bi bi-github"></i>
          </a>

          <a href="https://www.linkedin.com/in/saravana-kumar-882298398" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-linkedin"></i>
          </a>

          <a href="/Contact">
            <i className="bi bi-envelope-fill"></i>
          </a>

        </div>

      </div>


      {/* RIGHT ID CARD */}
      <div className="id-container">

        <div className="rope"></div>

        <div className="clip"></div>

        <div className="idcard">
          <img src={home} alt="Profile" />
        </div>

      </div>

    </div>
  );
}

export default Home;