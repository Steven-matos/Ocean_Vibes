import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// components
import Home from "./component/Home.js";
import Contact from "./component/Contact.js";
import Service from "./component/Service.js";

export default function App() {
  return (
    <Router>
      <div>
        <div>
          <img alt="Ocean Vibes Aquariums logo" />
        </div>
        <nav>
          <ul>
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

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
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
    </Router>
  );
}
