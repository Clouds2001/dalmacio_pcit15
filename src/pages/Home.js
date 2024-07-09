import "./Home.css";

import klydz1 from "../img/Pic1.png";

import klydz2 from "../img/freelancer.png";
import klydz3 from "../img/ts.png";
import klydz4 from "../img/fewd.jpeg";



import Navbar from "./Navbar";

const Home = () => {
  return (
    <>
      <Navbar />

      <div className="wrapper">
        <div className="overlay">
          <div class="container1">
            <div id="banner" className="d-flex align-items-center">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 ok">
                    <div className="card">
                      <h1 className="text display-4 fw-bold text-white">Hello, I'm</h1>
                      <h1 className="text display-4 fw-bold text-white">
                      Klydz L. Dalmacio
                      </h1>
                      <br />
                      <p className="self text-light">
                        I'm a Freelancer, Tech Support & Front End Web Developer
                      </p>
                      <a href="" className="btn btn-brand shadow">
                        Get to Know Better
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-6 zoom-effect">
                    <div className="card">
                      <img
                        src={klydz1}
                        alt="Profile Picture"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section id="info">
        <div className="container">
          <div className="row">
            <div className="col-lg mb-3">
              <div className="card p-5 shadow">
                <img src={klydz2} alt="" />
                <h3 className="text-center">Freelancer</h3>
                <p>
                Freelancers play a vital role in today's workforce, offering their skills and expertise across various industries
                without being tied to a single employer. Unlike traditional employees, freelancers enjoy the flexibility 
                to choose their projects, set their schedules, and work remotely. This independence allows them to pursue
                diverse opportunities and gain experience across different clients and projects. 
                </p>
              </div>
            </div>
            <div className="col-lg mb-3">
              <div className="card p-5 shadow">
                <img src={klydz3} alt="" />
                <h3 className="text-center">Technical Support</h3>
                <p>
                Tech support freelancers provide essential services to individuals and businesses by troubleshooting 
                and resolving technical issues related to software, hardware, networks, and other IT-related problems. 
                They offer remote assistance, either through phone calls, emails, or online chats, to diagnose problems,
                 provide guidance, and implement solutions. 
                </p>
              </div>
            </div>
            <div className="col-lg mb-3">
              <div className="card p-5 shadow">
                <img src={klydz4} alt="" />
                <h3 className="text-center">Front-End Web Developer</h3>
                <p>
                Front-end web developers specialize in creating visually appealing and user-friendly interfaces on the web.
                 They are skilled in languages such as HTML, CSS, and JavaScript, which are fundamental to building and styling websites. 
                 Front-end developers work closely with designers to translate visual designs into functional websites or web applications 
                 that users can interact with seamlessly. 
                </p>
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

export default Home;
