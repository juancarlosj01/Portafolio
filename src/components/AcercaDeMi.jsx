import { Grid } from "@mui/material";
import React from "react";

const AcercaDeMi = () => {
  return (

    <section id="about-me" >
      

<Grid
  container
  direction="row"
  justifyContent="center"
  alignItems="center"
>
        <h2 className="title"  style={{marginTop: "1in"}}>Perfil</h2>
    
    <div className='descripcion'>
        <h2>
          Desarrollador web con 6 meses de experiencia, maquetado web,
          proactivo, trabajo en equipo, Autorregulación del trabajo, Orientación
          a resultados, Comunicación efectiva
        </h2>
    </div>
      
</Grid>
    </section>
  );
};

export default AcercaDeMi;
