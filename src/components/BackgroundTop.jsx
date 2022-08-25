import { Button } from "@mui/material";
import React from "react";
import programando from "../assets/programando.mp4";
import cv from "../assets/cv.pdf";
import as from "../assets/as.png";
import ws from "../assets/ws.png";

const BackgroundTop = () => {
  return (
    <section style={{ marginTop: "3in" }} id="#">
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
        <img className="profile" src={as} alt="" />
      </div>
      <div>
        <Button className="descargar" href={cv} download>
          Descargar CV
        </Button>
      </div>
      <div>
        <a href="https://api.whatsapp.com/send?phone=584126317575&text=Estoy+interesado+en+contratarlo">
          {" "}
          <img
            src={ws}
            alt=""
            width="50"
            height="50"
            className="technology ws"
          />
        </a>
      </div>
    </section>
  );
};

export default BackgroundTop;
