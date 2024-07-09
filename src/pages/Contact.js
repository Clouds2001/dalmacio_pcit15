import "./Contact.css";
import Navbar from "./Navbar";

import klydz1 from "../img/Pic1.png";

const Contact = () => {
  return (
    <>
      <Navbar />

      <div className="wrapper bg-secondary bg-gradient">
        <div className="overlay">
        </div>
      </div>

      <div className="wrapper">
        <div className="overlay">
          <div class="container1">
            <div id="banner" className="d-flex align-items-center">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 ok">
                    <div className="card">
                      <br />
                      <p className="self text-light">
                      Please find below my contact information for your reference:<br/>
                     <b> Email:</b> keyzdalmacio@gmail.com<br/>
                      <b>Phone:</b> 09561376454<br/>
                      <b>Address:</b> Kabankalan City, Negros Occidental<br/>
                      </p>
                      
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

export default Contact;
