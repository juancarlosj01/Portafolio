import React, { Component } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Grid } from "@mui/material";

const items = [
  /* {
    src: "https://i.ibb.co/ryTkFXn/weather.png",
    altText: "Slide 1",    
    caption: "Weather App",
    url: "https://helpful-snickerdoodle-1501e3.netlify.app/"
  },
  */

  //   <a href="https://ibb.co/hcgTLhM"><img src="https://i.ibb.co/QkJxpzc/espada.png" alt="espada" border="0"></a>
  // <a href="https://ibb.co/9WTZbrm"><img src="https://i.ibb.co/m4qN9cr/Mausoleo.png" alt="Mausoleo" border="0"></a>
  // <a href="https://ibb.co/ZcfFps5"><img src="https://i.ibb.co/8PmfL3q/mesa.jpg" alt="mesa" border="0"></a>
  // <a href="https://ibb.co/pyDkfjJ"><img src="https://i.ibb.co/sHSXK9y/cocina1.jpg" alt="cocina1" border="0"></a>
  // <a href="https://ibb.co/MGqT9LC"><img src="https://i.ibb.co/mXQsS7c/Dados.png" alt="Dados" border="0"></a>
  // <a href="https://ibb.co/DQczLvP"><img src="https://i.ibb.co/KW4bmfc/escritorio.jpg" alt="escritorio" border="0"></a>

  {
    src: "https://i.ibb.co/KW4bmfc/escritorio.jpg",
    url: "https://ibb.co/DQczLvP",
    caption: "Escritorio Minimalista. Blender",
  },
];

class Portafolio2 extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === items.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? items.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <a href={item.url}>
            <img
              src={item.src}
              alt={item.altText}
              width="120%"
              height="500px"
              style={{ objectFit: "contain" }}
            />
          </a>
          <CarouselCaption
            captionText={item.caption}
            // captionHeader={item.caption}
          />
        </CarouselItem>
      );
    });

    return (
      <section id="portfolio">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <h3 className="title" style={{ marginTop: "1in" }}>
            Modelado / Animación 3D
          </h3>
        </Grid>

        <div>
          <Carousel
            activeIndex={activeIndex}
            next={this.next}
            previous={this.previous}
          >
            <CarouselIndicators
              items={items}
              activeIndex={activeIndex}
              onClickHandler={this.goToIndex}
            />
            {slides}
            <CarouselControl
              direction="prev"
              directionText="Previous"
              onClickHandler={this.previous}
            />
            <CarouselControl
              direction="next"
              directionText="Next"
              onClickHandler={this.next}
            />
          </Carousel>
        </div>
      </section>
    );
  }
}

export default Portafolio2;
