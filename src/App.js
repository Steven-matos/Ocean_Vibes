import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./component/Nav.js";
import Footer from "./component/Footer.js";

//Normalized CSS
import "./styles/normalize.css";

//Main Styles
import "./styles/index.css";

// components
import Home from "./component/Home.js";
import Contact from "./component/Contact.js";
import Service from "./component/Service.js";

export default function App() {
  return (
    <Router>
      <Nav />
      <div>
        <Switch>
          <Route path="/services">
            <Service />
          </Route>
          <Route path="/contact-us">
            <Contact />
          </Route>
          Î
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}
