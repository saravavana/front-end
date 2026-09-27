import image1 from './assets/event.png';
import image2 from './assets/ngc.png';
import image3 from './assets/quiz.png';
import image4 from './assets/music.png';
import image5 from './assets/chatui.png';
import image6 from './assets/countryapp.png';
import './Project.css';

function Project() {
    return (
        <>
            <section className="projects">

                <div className="title">
                    <p>MY WORK</p>

                    <h1>
                        Featured
                        <span id="span">Projects</span>
                    </h1>

                    <div className="line"></div>

                    <h4>
                        A collection of projects I've worked on,
                        showcasing my skills in web development.
                    </h4>
                </div>

                <div className="project-container">

                    {/* Event Booking */}
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
                                <button className="live">
                                    <a href="http://127.0.0.1:5501/Party%20Planner%20Landing%20Page/index.html">
                                        Live Demo
                                    </a>
                                </button>

                                <button className="git">
                                    <a href="https://github.com/saravavana/projects/tree/main/Party%20Planner%20Landing%20Page">
                                        GitHub
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>


                    {/* Software Institute */}
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
                                <button className="live">
                                    <a href="http://127.0.0.1:5501/Software%20Institute%20UI/index.html">
                                        Live Demo
                                    </a>
                                </button>

                                <button className="git">
                                    <a href="https://github.com/saravavana/projects/tree/main/Party%20Planner%20Landing%20Page">
                                        GitHub
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>


                    {/* Quiz App */}
                    <div className="card">
                        <div className="image">
                            <img src={image3} alt="Quiz App" />
                        </div>

                        <div className="content">
                            <h2>Quiz App</h2>

                            <p>
                                Interactive quiz application with
                                timer, score tracking,
                                category selection and result page.
                            </p>

                            <div className="skillbox">
                                <span>HTML</span>
                                <span>CSS</span>
                                <span>JavaScript</span>
                                <span>Bootstrap</span>
                            </div>

                            <div className="buttons">
                                <button className="live">
                                    <a href="http://127.0.0.1:5501/quiz%20website/index.html">
                                        Live Demo
                                    </a>
                                </button>

                                <button className="git">
                                    <a href="https://github.com/saravavana/projects/tree/main/quiz%20website">
                                        GitHub
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>


                    {/* Music Player */}
                    <div className="card">
                        <div className="image">
                            <img src={image4} alt="Music Player" />
                        </div>

                        <div className="content">
                            <h2>Music Player</h2>

                            <p>
                                Responsive music player with
                                play, pause,
                                progress bar and playlist.
                            </p>

                            <div className="skillbox">
                                <span>HTML</span>
                                <span>CSS</span>
                                <span>JavaScript</span>
                                <span>Bootstrap</span>
                            </div>

                            <div className="buttons">
                                <button className="live">
                                    <a href="http://127.0.0.1:5500/index.html">
                                        Live Demo
                                    </a>
                                </button>

                                <button className="git">
                                    <a href="https://github.com/saravavana/front-end/tree/main/HTML%2CCSS%2CJS-%20PROJECTS/MUSIC%20PLAYER">
                                        GitHub
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>


                    {/* React Chat UI */}
                    <div className="card">
                        <div className="image">
                            <img src={image5} alt="Chat UI" />
                        </div>

                        <div className="content">
                            <h2>React Chat UI</h2>

                            <p>
                                Modern responsive chat interface built with
                                React featuring message handling and interactive UI.
                            </p>

                            <div className="skillbox">
                                <span>HTML</span>
                                <span>CSS</span>
                                <span>JavaScript</span>
                                <span>React</span>
                            </div>

                            <div className="buttons">
                                <button className="live">
                                    <a href="https://chat-ui-mauve-nu.vercel.app/">
                                        Live Demo
                                    </a>
                                </button>

                                <button className="git">
                                    <a href="https://github.com/saravavana/front-end/tree/main/REACT/REACT%20PROJECTS/chat%20ui%20react%20project%201/chatbot">
                                        GitHub
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>


                    {/* Country Info App */}
                    <div className="card">
                        <div className="image">
                            <img src={image6} alt="Country Info App" />
                        </div>

                        <div className="content">
                            <h2>Country Info App</h2>

                            <p>
                                React country information application with
                                search, region filter, sorting and detailed country pages.
                            </p>

                            <div className="skillbox">
                                <span>HTML</span>
                                <span>CSS</span>
                                <span>JavaScript</span>
                                <span>React</span>
                            </div>

                            <div className="buttons">
                                <button className="live">
                                    <a href="https://country-info-application-kappa.vercel.app/">
                                        Live Demo
                                    </a>
                                </button>

                                <button className="git">
                                    <a href="https://github.com/saravavana/front-end/tree/main/REACT/REACT%20PROJECTS/country%20info%20app%20project%202/%40latest">
                                        GitHub
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}

export default Project;