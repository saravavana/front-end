import "./Skills.css";

import html from './assets/html.png';
import css from './assets/css.png';
import js from './assets/js.png';
import bootstrap from './assets/bootstrap.png';
import react from './assets/react.png';
import nodejs from "./assets/nodejs.png";
import Express from "./assets/express.png";
import Git from "./assets/git.png";
function Skills() {
  return (
    <>
      <div className="skills-section">

        <div className="title">
          <p>MY SKILLS</p>
          <h1>
            Technical <span>Skills</span>
          </h1>
          <div className="line"></div>
        </div>

        <div className="skills-container">
          <div className="skill-card">
            <img src={html} alt="HTML5" />
            <h2>HTML5</h2>
            <p>Semantic structure and modern web page development.</p>
          </div>

          <div className="skill-card">
            <img src={css} alt="CSS3" />
            <h2>CSS3</h2>
            <p>Responsive layouts, Flexbox, Grid and animations.</p>
          </div>

          <div className="skill-card">
            <img src={js} alt="JavaScript" />
            <h2>JavaScript</h2>
            <p>DOM, ES6+, API integration and interactive UI.</p>
          </div>

          <div className="skill-card">
            <img src={bootstrap} alt="Bootstrap" />
            <h2>Bootstrap</h2>
            <p>Responsive websites with Bootstrap components.</p>
          </div>
          <div className="skill-card">
            <img src={react} alt="React" />
            <h2>React</h2>
            <p>Component-based UI development and state management.</p>
          </div>
          <div className="skill-card">
            <img src={Git} alt="Git" />
            <h2>Git</h2>
            <p>Version control and collaborative development.</p>
          </div>
          <div className="skill-card">
            <img src={Express} alt="Express.js" />
            <h2>Express.js</h2>
            <p>Backend development and REST API creation.</p>
          </div>

          <div className="skill-card">
            <img src={nodejs} alt="Node.js" />
            <h2>Node.js</h2>
            <p>Backend development and REST API creation.</p>
          </div>

        </div>

      </div>
    </>
  )
}

export default Skills;