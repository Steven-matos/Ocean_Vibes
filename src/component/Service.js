import React from "react";
import cornerTank from "../assets/img/Trapezoidal-aquarium.jpg";

import { Button, Icon } from "@material-ui/core";

const Service = () => {
  return (
    <div>
      <header className="service-header"></header>
      <section className="services-container">
        <h1>Services</h1>
        <article className="service-content">
          <div className="content-container">
            <p>
              we offer our customers an assortment of services that permit us to
              assist you in everything you might need.
              <br />
              <br />
              From the design and manufacture to the upkeep and selection of
              animals we’re characterized by advising our customers properly so
              they can make an efficient use of their budget and can have the
              aquarium of their dreams.
            </p>
            <ul className="service-list">
              <li>Custom Aquariums</li>
              <li>Maintenance</li>
              <li>Complete aquarium set-up</li>
              <li>Live corals</li>
              <li>Fish</li>
            </ul>
            <br />
            <h3>CONTACT US FOR FREE ESTIMATES</h3>
            <div className="service-btn">
              <Button
                className="phone-btn"
                variant="contained"
                color="primary"
                endIcon={<Icon>call</Icon>}
                href="tel:+14075564715"
              >
                Call Us
              </Button>
              <Button
                variant="contained"
                color="primary"
                endIcon={<Icon>mail</Icon>}
                href="mailto:oceanvibes413@yahoo.com"
              >
                Email Us
              </Button>
            </div>
          </div>
          <img className="corner-img" src={cornerTank} alt="Fishes" />
        </article>
      </section>
    </div>
  );
};

export default Service;
