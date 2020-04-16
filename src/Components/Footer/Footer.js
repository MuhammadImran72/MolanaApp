import React from "react";
import "../../assets/css/Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <div id="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-8 col-sm-8">
              <h5>About</h5>
              <p>
                Maulana Amir Abbas has a charming personality. He is very humble
                and tolerant.He has a unique style of explaining Islamic
                teachings to people who attend his lectures.
              </p>
            </div>

            <div className=" col-lg-4 col-md-8 col-sm-8">
              <div className="navlink  text-center">
                <h5>Quick Link</h5>
                <ul>
                  <li>
                    <Link> Services</Link>
                  </li>
                  <li>
                    <Link> Services</Link>
                  </li>
                  <li>
                    <Link> Packages</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 col-md-8 col-sm-8">
              <h5>Contact Us</h5>
              <ul>
                <li>
                  <i class="fa fa-map-marker" aria-hidden="true"></i>{" "}
                  <span>House # 384A/2 Street # 7</span>
                </li>
                <li>
                  <i class="fa fa-mobile" aria-hidden="true"></i>
                  <span> 0336 0552085</span>
                </li>
                <li>
                  <i class="fa fa-facebook" aria-hidden="true"></i>
                  <i class="fa fa-youtube-play" aria-hidden="true"></i>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
