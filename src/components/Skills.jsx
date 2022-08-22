import { Grid, } from "@mui/material";
import React from "react";
import css from "../assets/css.svg"

const Skills = () => {
  return (
    <section>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <h2 className="title">Habilidades</h2>
      </Grid>
      
      <div className="tecnology">
        <div  >
          <img src="/src/assets/html.svg" alt="" width="50" />
          <h4>HTML</h4>
        </div>
        <div>
          <img src={css} alt="" width="50" />
          <h4>CSS</h4>
        </div>
        <div>
          <img src="/src/assets/js.svg" alt="" width="50" />
          <h4>JavaScript</h4>
        </div>
        <div>
          <img src="/src/assets/react.svg" alt="" width="50" />
          <h4>React.js</h4>
        </div>
        <div>
          <img src="/src/assets/bootstrap.svg" alt="" width="50" />
          <h4>Bootstrap</h4>
        </div>
        <div>
          <img src="/src/assets/material.svg" alt="" width="50" />
          <h4>Material</h4>
        </div>
        <div>
          <img src="/src/assets/redux.svg" alt="" width="50" />
          <h4>Redux</h4>
        </div>
        <div >
          <img src="/src/assets/git.svg" alt="" width="60" />
          <h4>GitHub</h4>
        </div>
      </div>
    </section>
  );
};

export default Skills;
