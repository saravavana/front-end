import './About.css';
import hero from './assets/about.jpeg';
function About() {
  return (
    <>
      <div className="about">

        <div className="title">
          <p>ABOUT ME</p>
          <h1>
            Discover More <span id='span'>About Me</span>
          </h1>
          <div className="line"></div>
        </div>

        <div className="about-container">

          <div className="about-image">
            <img src={hero} alt="Profile" />
          </div>

          <div className="about-content">

            <h2>Hello, I'm Saran <i class="bi bi-incognito"></i> </h2>

            <p>
              I'm a passionate Front-End Developer who enjoys creating
              responsive and user-friendly websites. I love building
              modern UI designs and continuously improving my skills.
            </p>

            <p>
              I have experience with HTML, CSS, JavaScript, Bootstrap
              and React. My goal is to become a Full Stack Developer
              by building real-world projects.
            </p>

            <div className="about-cards">

              <div className="info-card">
                <h3><i class="bi bi-mortarboard-fill"></i> Education</h3>
                <p>Bachelor's Degree</p>
              </div>

              <div className="info-card">
                <h3><i class="bi bi-briefcase-fill"></i> Experience</h3>
                <p>2+ Years(Non-IT)</p>
              </div>

              <div className="info-card">
                <h3><i class="bi bi-folder-fill"></i> Projects</h3>
                <p>4+ Completed</p>
              </div>

              <div className="info-card">
                <h3><i class="bi bi-geo-alt-fill"></i> Location</h3>
                <p>India, Tamil Nadu,Dindigul District</p>
              </div>

            </div>

            <button className="resume-btn">
              Download Resume
            </button>

          </div>

        </div>

        <div className="journey">

          <h2>My Journey</h2>

          <div className="timeline">

            <div className="timeline-item">
              <span><i class="bi bi-mortarboard-fill"></i></span>
              <div>
                <h3>School</h3>
                <p>Completed Higher Secondary Education at Nehruji Government Higher Secondery School-idayayakottai,Dindigul District <br />(2018-2020).</p>
              </div>
            </div>

            <div className="timeline-item">
              <span><i class="bi bi-mortarboard-fill"></i></span>
              <div>
                <h3>College</h3>
                <p>Completed Bachelor's Degree in Computer Science at Jairams Arts and Science College-Attamparappu,Karur District <br />(2020-2023).</p>
              </div>
            </div>

            <div className="timeline-item">
              <span><i class="bi bi-briefcase-fill"></i></span>
              <div>
                <h3>Data Annotation Executive</h3>
                <p>Worked for 2 years as a Data Annotation Executive, labeling and annotating image and video datasets to support AI and Machine Learning models while ensuring high accuracy and quality. <br />(2023-2025)</p>
              </div>
            </div>

            <div className="timeline-item">
              <span><i class="bi bi-code-square"></i></span>
              <div>
                <h3>Front-End Developer</h3>
                <p>Building responsive websites using React.</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </>
  )
}
export default About