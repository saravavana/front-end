import image1 from './assets/event.png';
import image2 from './assets/ngc.png';
import image3 from './assets/quiz.png';
import image4 from './assets/music.png';
import './project.css';
function Project() {
    return (
        <>
            <section className="projects">
                <div className="title">
                    <p>MY WORK</p>
                    <h1>
                        Featured
                        <span id='span'>Projects</span>
                    </h1>
                    <div className="line"></div>
                    <h4>
                        A collection of projects I've worked on,
                        showcasing my skills in web development.
                    </h4>
                </div>

                <div className="project-container">
                    <div className="card">
                        <div className="image">
                            <img src={image1} alt="Event Booking" />
                        </div>
                        <div className="content">
                            <h2>Event Booking Landing Page</h2>
                            <p>
                                Modern responsive landing page with
                                smooth animations, booking section
                                and attractive UI.
                            </p>
                            <div className="skillbox">
                                <span>HTML</span>
                                <span>CSS</span>
                            </div>
                            <div className="buttons">
                                <button className="live"><a href="http://127.0.0.1:5501/Party%20Planner%20Landing%20Page/index.html">
                                    Live Demo</a>

                                </button>
                                <button className="git">
                                    <a href="https://github.com/saravavana/projects/tree/main/Party%20Planner%20Landing%20Page">GitHub</a>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="image">
                            <img src={image2} alt="Software Institute" />
                        </div>

                        <div className="content">
                            <h2>Software Institute UI</h2>
                            <p>
                                Professional educational website UI
                                with hero section, courses,
                                testimonials and contact page.
                            </p>
                            <div className="skillbox">
                                <span>HTML</span>
                                <span>CSS</span>
                                <span>Bootstrap</span>
                            </div>
                            <div className="buttons">
                                <button className="live"><a href="http://127.0.0.1:5501/Software%20Institute%20UI/index.html">Live Demo</a>

                                </button>
                                <button className="git"><a href="https://github.com/saravavana/projects/tree/main/Party%20Planner%20Landing%20Page">GitHub </a>

                                </button>
                            </div>
                        </div>
                    </div>


                    <div class="card">
                        <div class="image">
                            <img src={image3} alt="Quiz App" />
                        </div>

                        <div class="content">
                            <h2>Quiz App</h2>
                            <p>
                                Interactive quiz application with
                                timer, score tracking,
                                category selection and result page.
                            </p>

                            <div class="skillbox">
                                <span>HTML</span>
                                <span>CSS</span>
                                <span>JavaScript</span>
                                <span>Bootsrap</span>
                            </div>
                            <div class="buttons">
                                <button class="live"><a href="http://127.0.0.1:5501/quiz%20website/index.html"> Live Demo</a>

                                </button>
                                <button class="git"><a href="https://github.com/saravavana/projects/tree/main/quiz%20website"> GitHub</a>

                                </button>
                            </div>
                        </div>

                    </div>
                    <div class="card">
                        <div class="image">
                            <img src={image4} alt="Music Player" />
                        </div>
                        <div class="content">
                            <h2>Music Player</h2>
                            <p>
                                Responsive music player with
                                play, pause,
                                progress bar and playlist.
                            </p>
                            <div class="skillbox">
                                <span>HTML</span>
                                <span>CSS</span>
                                <span>JavaScript</span>
                                <span>Bootstrap</span>
                            </div>
                            <div class="buttons">
                                <button class="live"><a href="http://127.0.0.1:5500/index.html">
                                    Live Demo</a>
                                </button>
                                <button class="git"><a href="">GitHub</a>

                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Project