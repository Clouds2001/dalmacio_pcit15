import "./Portfolio.css";
import Navbar from "./Navbar";

import f1 from "../img/free1.jpg";
import f2 from "../img/free2.png";
import f3 from "../img/frere3.png";

import t1 from "../img/tech1.png";
import t2 from "../img/tech2.jpg";
import t3 from "../img/tech3.jpg";

import k1 from "../img/fewd1.png";
import k2 from "../img/fewd2.jpg";
import k3 from "../img/fewd3.jpg";


const Portfolio = () => {
  return (
    <>
      <Navbar />

      <div className="wrapper bg-secondary bg-gradient">
        <div className="overlay">
        </div>
      </div>

      <section id="portfolio">
        <div className="container">
          <div className="pb-5">
          </div>
          <div class="isotope">
            <div class="row">
              <hr />
              <p className="display-5 text-center"><b>Freelancer</b></p>
              <hr/>
              <div class="col-lg-4 mb-4">
                <div class="item">
                  <img src={f1} alt="" />
                  <div class="overlay"></div>
                </div>
              </div>

              <div class="col-lg-4 mb-4">
                <div class="item">
                  <img src={f2} alt="" />
                  <div class="overlay"></div>
                </div>
              </div>

              <div class="col-lg-4 mb-4">
                <div class="item">
                  <img src={f3} alt="" />
                  <div class="overlay"></div>
                </div>
              </div>
              <p className="display-5 text-center"><b>Technical Support</b></p>
              <hr/>
              <div class="col-lg-4 mb-4">
                <div class="item">
                  <img src={t1} alt="" />
                  <div class="overlay"></div>
                </div>
              </div>

              <div class="col-lg-4 mb-4">
                <div class="item">
                  <img src={t2} alt="" />
                  <div class="overlay"></div>
                </div>
              </div>

              <div class="col-lg-4 mb-4">
                <div class="item">
                  <img src={t3} alt="" />
                  <div class="overlay"></div>
                </div>
              </div>
              <p className="display-5 text-center"><b>Front-End Web Developer</b></p>
              <hr/>
              <div class="col-lg-4 mb-4">
                <div class="item">
                  <img src={k1} alt="" />
                  <div class="overlay"></div>
                </div>
              </div>

              <div class="col-lg-4 mb-4">
                <div class="item">
                  <img src={k2} alt="" />
                  <div class="overlay"></div>
                </div>
              </div>

              <div class="col-lg-4 mb-4">
                <div class="item">
                  <img src={k3} alt="" />
                  <div class="overlay"></div>
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

export default Portfolio;
