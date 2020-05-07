import React from "react";
import Nav from "./Nav.js";

import { Button, Icon } from "@material-ui/core";

const Home = () => {
  return (
    <div>
      <div>
        <Nav />
        <h1>Ocean Vibes Aquarium LLC</h1>
      </div>
      <Button variant="contained" color="primary" endIcon={<Icon>call</Icon>}>
        Call Us
      </Button>
    </div>
  );
};

export default Home;
