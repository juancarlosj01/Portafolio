import { Button } from "@mui/material";
import React from "react";

const BackgroundTop = () => {
  return (
    <section>
      {/* <video src="https://vimeo.com/741324237"></video> */}

      <video width="750" height="500" controls>
        <source
          src="https://vimeo.com/741324237"
          type="video/mp4"
        />
      </video>

      <div>
        <Button className="descargar" href="./src/assets/cv.pdf">
          Descargar
        </Button>
      </div>
    </section>
  );
};

export default BackgroundTop;
