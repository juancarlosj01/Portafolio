import { Button } from "@mui/material";
import React from "react";
import programando from "../assets/programando.mp4";


const BackgroundTop = () => {
  return (
    <section style={{ marginTop: '3in' }} id='init'>
      {/* <video src="https://vimeo.com/741324237"></video> */}

      {/* <video width="750" height="500" controls>
        <source
          src="https://vimeo.com/741324237"
          type="video/mp4"
        />
      </video>
 */}

      <video src={programando} autoPlay loop muted />
<br />
<br />
      <div>
        <Button className="descargar" href="./src/assets/cv.pdf">
          Descargar
        </Button>
      </div>
    </section>
  );
};

export default BackgroundTop;
