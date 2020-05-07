import React from "react";
import Nav from "./Nav.js";

import { Button, Icon } from "@material-ui/core";

const Home = () => {
  return (
    <div>
      <Nav />
      <div className="header">
        <h1>Ocean Vibes Aquarium</h1>
        <div className="contactBtn">
          <Button
            variant="contained"
            color="primary"
            endIcon={<Icon>call</Icon>}
            href="tel:+14075564715"
          >
            Call Us
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
