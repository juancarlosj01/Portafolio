import { Grid } from "@mui/material";
import React from "react";

const AcercaDeMi = () => {
  return (
    <section style={{ marginTop: '3in' }}>

<Grid
  container
  direction="row"
  justifyContent="center"
  alignItems="center"
>
        <h1>Perfil</h1>
    
    <div className='descripcion'>
        <h2>
          Desarrollador web con 2 meses de experiencia, maquetado web,
          proactivo, trabajo en equipo, Autorregulación del trabajo, Orientación
          a resultados, Comunicación efectiva
        </h2>
    </div>
      
</Grid>
    </section>
  );
};

export default AcercaDeMi;
