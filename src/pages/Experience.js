import "./Experience.css";
import Navbar from "./Navbar";

import ojt from "../img/ojt.jpg";
import cwd from "../img/cwd.jpg";
import fewd from "../img/frontEWD.png";

const Experience = () => {
  return (
    <>
      <Navbar />

      <div className="wrapper bg-secondary bg-gradient">
        <div className="overlay">
         

          <section id="info">
        <div className="container">
          <div className="row">
            <div className="col-lg mb-3">
              <div className="card p-5 shadow">
                <img src={ojt} alt="" />
                <h3 className="text-center">On the Job Training</h3>
                <p>
                During my IT internship at the Mabinay Negros Occidental Tourism Office, 
                I had the opportunity to merge my technical skills with the promotion of local culture and tourism. My role involved supporting the office's IT 
                infrastructure and contributing to digital initiatives aimed at enhancing
                 visitor engagement and administrative efficiency.
                </p>
              </div>
            </div>
            <div className="col-lg mb-3">
              <div className="card p-5 shadow">
                <img src={cwd} alt="" />
                <h3 className="text-center">Creative Web Design</h3>
                <p>
                My TESDA Creative Web Design course at Kabankalan City TESDA was an enriching
                 journey that significantly enhanced my skills and understanding of modern web
                  design principles. Throughout the course, I had the opportunity to delve into 
                  various aspects of web development and design, under the guidance of experienced 
                  instructors and industry professionals.
                </p>
              </div>
            </div>
            <div className="col-lg mb-3">
              <div className="card p-5 shadow">
                <img src={fewd} alt="" />
                <h3 className="text-center">Front-End Web Developer</h3>
                <p>
                My experience with front-end web development during my thesis at CPSU was 
                not just a project, but a transformative journey that solidified
                 my skills and passion for creating intuitive and effective digital
                solutions. Our thesis focused on developing a comprehensive web application for Production and Enterprise Delopment Office.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
        </div>
      </div>

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

export default Experience;
