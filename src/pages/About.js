import "./About.css";
import "./Education.css";
import Navbar from "./Navbar";

import pic from "../img/Pic1.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUnity,
  faGithub,
  faSpotify,
  faSteam,
} from "@fortawesome/free-brands-svg-icons";
import { faGamepad, faCircle, faSquare } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <>
      <Navbar />


      <section id="carton">
        <div className="container mt-5">
          <div className="col">
            <div className="card p-5 shadow">
              <div className="row">
                <div className="col-lg-7 text">
                  <h4 className="text-secondary text-center"><b>About Me</b></h4>
                  <p>
                  As a graduating student in Bachelor of Science in Information Technology (BSIT) at Central Philippines State University, 
                  I am also actively engaged as a freelancer providing tech support and front-end web development services.
                  Besides my academic pursuits, I have a passion for traveling. 
                  </p>
                  <h4 className="text-secondary text-center"><b>Academic Journey</b></h4>
                  <p>
                  My academic journey in pursuing a Bachelor of Science in Information Technology (BSIT) 
                  at Central Philippines State University has been both challenging and rewarding. 
                  It began with foundational courses in information technology and programming, 
                  where I gained a solid understanding of algorithms, data structures, and some programming languages.
                  </p>
                </div>
                <div className="col-lg-5 mb-5">
                  <center>
                    <img
                      src={pic}
                      alt="Profile Picture"
                    />
                  </center>
                  <center>
                    <div className="card box">
                      <div className="row p-2">
                       <p>Email: keyzdalmacio@gmail.com <br/>
                       Mobile No. 09561376454</p>
                      </div>
                    </div>
                  </center>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="pb-5 pt-5">
        <div className="container mt-3">
          <div className="row align-items-center">
            <div className="col-lg-6 text-center"></div>
          </div>
        </div>
      </section>

      <section id="education" class="education">
        <div class="section-heading text-center mb-5">
          <h1>Education</h1>
        </div>
        <div class="container">
          <div class="education-horizontal-timeline">
            <div class="row">
              <div class="col-md-4 text-center mb-3">
                <div class="single-horizontal-timeline">
                  <div class="experience-time">
                    <h2>2024</h2>
                  </div>
                  <div class="timeline-horizontal-border">
                    <FontAwesomeIcon className="i" icon={faSquare} />
                  </div>
                  <div class="timeline text-center">
                    <div class="timeline-content">
                      <h4 class="title">
                        Central Philippines State University
                      </h4>
                      <p className="text-secondary">
                        Brgy. Camingawan, Kabankalan City, Negros Occidental
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4 text-center mb-3">
                <div class="single-horizontal-timeline">
                  <div class="experience-time">
                    <h2>2019</h2>
                  </div>
                  <div class="timeline-horizontal-border">
                    <FontAwesomeIcon className="i" icon={faSquare} />
                  </div>
                  <div class="timeline text-center">
                    <div class="timeline-content">
                      <h4 class="title">
                        Florentino Galang Sr. National HighSchool 
                      </h4>
                      <p className="text-secondary">
                        Brgy. Oringao, Kabankalan City, Negros Occidental
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4 text-center mb-3">
                <div class="single-horizontal-timeline">
                  <div class="experience-time">
                    <h2>2014</h2>
                  </div>
                  <div class="timeline-horizontal-border">
                    <FontAwesomeIcon className="i" icon={faSquare} />
                  </div>
                  <div class="timeline text-center">
                    <div class="timeline-content">
                      <h4 class="title">Noac Elementary School</h4>
                      <p className="text-secondary">
                        Brgy. Camingawan, Kabankalan City, Negros Occidental
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer id="footer" className="footer_section pt-2 pb-2">
        <div className="container">
          <div className="footer-info">
            <p>
              &copy; <span id="displayYear"></span> Klydz L. Dalmacio BSIT 
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default About;
