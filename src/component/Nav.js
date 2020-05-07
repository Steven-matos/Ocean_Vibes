import React from "react";
import { Link } from "react-router-dom";

import logo from "../assets/logo/OVA_logo_transparent.png";

const Nav = () => {
  return (
    <nav className="navBar">
      <div>
        <Link to="/">
          <img className="logo" src={logo} alt="Logo" height="80" width="80" />
        </Link>
      </div>
      <ul className="navLinks">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/contact-us">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
