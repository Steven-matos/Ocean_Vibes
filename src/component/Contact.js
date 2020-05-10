import React from "react";
import Owner from "../assets/img/IMG_4570.jpg";

const Contact = () => {
  return (
    <div>
      <header className="contact-header"></header>

      <section className="contact-container">
        <img src={Owner} alt="Owner Dre" />
        <div className="contact-content">
          <h1 className="contact-h1">Get In Touch</h1>
          <p>
            Contact us we offer <span>free estimates</span>. We offer one on one
            help to make sure that all your requirements meets your budget.
            <br />
            <br />
            Each Custom Aquarium project is unique for us, we will assist you
            from design to completion.
            <br />
            <br />
            You are very important to us, our customers satisfaction is our top
            priority, please contact us, we are more than happy to assist you.
            You will be contacted as soon as possible.
          </p>
          <h2>Contact Details</h2>
          <ul>
            <li>
              <span>Owner Name</span>: Dre
            </li>
            <li>
              <span>Email</span>:{" "}
              <a href="mailto:oceanvibes413@yahoo.com">
                oceanvibes413@yahoo.com
              </a>
            </li>
            <li>
              <span>Phone</span>:{" "}
              <a href="tel:+14075564715">(407) 556 - 4715</a>
            </li>
            <li>
              <span>Alt Phone</span>:{" "}
              <a href="tel:+13213337296">(321) 333 - 7296</a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Contact;
