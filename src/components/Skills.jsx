import { Grid } from "@mui/material";
import React from "react";
import css from "../assets/css.svg";
import git from "../assets/github.png";
import bootstrap from "../assets/bootstrap.svg";
import html from "../assets/html.svg";
import js from "../assets/js.svg";
import material from "../assets/material.svg";
import react from "../assets/react.svg";
import redux from "../assets/redux.svg";
import unity from "../assets/unity.svg";
import csharp from "../assets/csharp.svg";

const Skills = () => {
  return (
    <section id="skills">
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <h2 className="title" style={{ marginTop: "1in" }}>
          Habilidades
        </h2>
      </Grid>

      <div className="technologies-container" style={{ marginTop: "50px" }}>
        <div className="technology-box">
          <img src={html} alt="" width="50" className="technology" />
          <h4>HTML</h4>
        </div>
        <div className="technology-box">
          <img src={css} alt="" width="50" className="technology" />
          <h4>CSS</h4>
        </div>
        <div className="technology-box">
          <img src={js} alt="" width="50" className="technology" />
          <h4>JavaScript</h4>
        </div>
        <div className="technology-box">
          <img src={react} alt="" width="50" className="technology" />
          <h4>React.js</h4>
        </div>
        <div className="technology-box">
          <img src={unity} alt="" width="50" className="technology" />
          <h4>Unity</h4>
        </div>
        <div className="technology-box">
          <img src={csharp} alt="" width="50" className="technology" />
          <h4>C#</h4>
        </div>
        <div className="technology-box">
          <img src={bootstrap} alt="" width="50" className="technology" />
          <h4>Bootstrap</h4>
        </div>
        <div className="technology-box">
          <img src={material} alt="" width="50" className="technology" />
          <h4>Material</h4>
        </div>
        <div className="technology-box">
          <img src={redux} alt="" width="50" className="technology" />
          <h4>Redux</h4>
        </div>
        <div className="technology-box">
          <img src={git} alt="" width="60" className="technology" />
          <h4>GitHub</h4>
        </div>
      </div>
    </section>
  );
};

export default Skills;
