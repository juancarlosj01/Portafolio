import React from "react";

import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";

const Footer = () => {
  return (
    <section>
      <div className="btn-box" style={{ marginTop: ".5in" }}>
        <a
          href="https://www.linkedin.com/in/juan-pineda-058593100/"
          target="_blank"
        >
          <img
            src={linkedin}
            alt=""
            width="50"
            className="technology btn-icon"
          />{" "}
        </a>
        <a href="https://github.com/juancarlosj01" target="_blank">
          <img src={github} alt="" width="50" className="technology btn-icon" />
        </a>
      </div>
      <div className="footer">
        <h6 style={{ marginTop: ".5in" }}>
          2022 © Todos los derechos reservados <br />
          Made by Juan Carlos Pineda
        </h6>
      </div>
    </section>
  );
};

export default Footer;
