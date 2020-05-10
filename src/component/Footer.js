import React from "react";
import { Link } from "react-router-dom";

//icons
import CallTwoToneIcon from "@material-ui/icons/CallTwoTone";
import CopyrightIcon from "@material-ui/icons/Copyright";

//company logo
import Logo from "../assets/logo/Ocean_vides_transparent.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-contact">
        <CallTwoToneIcon fontSize="large" />
        <br />
        <br />
        <p>
          If you are a Designer, Interior decorator, Developer or Business
          Manager we can help you with your project, give your clients a
          beautiful, sophisticated and innovative space for their homes or
          businesses.
        </p>
        <br />
        <p>
          Call US NOW FOR MORE INFORMATION
          <br />
          <a href="tel:+14075564715">(407) 556 - 4715</a> OR{" "}
          <a href="tel:+13213337296">(321) 333 - 7296</a>
        </p>
      </div>
      <div className="footer-nav">
        <img src={Logo} alt="logo" />
        <div>
          <ul className="footerLinks">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>|</li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>|</li>
            <li>
              <Link to="/contact-us">Contact Us</Link>
            </li>
          </ul>
          <p>
            <CopyrightIcon />
            {"  "}2020 Ocean Vibes Aquarium LLC
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
