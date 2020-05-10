import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SideNav from "./SideNav.js";

import logo from "../assets/logo/OVA_logo_transparent.png";

const Nav = () => {
  const [screen, setScreen] = useState();

  const widthFinder = (screenWidth) => {
    console.log("passed down width", screenWidth);
    if (parseInt(screenWidth) < 600) {
      setScreen(true);
    } else {
      setScreen(false);
    }
  };

  useEffect(() => {
    widthFinder(window.innerWidth);
  });

  console.log(screen);

  return (
    <nav className="navBar">
      <div>
        <Link to="/">
          <img className="logo" src={logo} alt="Logo" height="70" width="70" />
        </Link>
      </div>
      {screen ? (
        <SideNav />
      ) : (
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
      )}
    </nav>
  );
};

export default Nav;
