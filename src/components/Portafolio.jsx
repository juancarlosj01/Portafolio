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
  {
    src: "https://i.ibb.co/ryTkFXn/weather.png",
    altText: "Slide 1",    
    caption: "Weather App",
    url: "https://helpful-snickerdoodle-1501e3.netlify.app/"
  },
  {
    src: "https://i.ibb.co/HVsypSQ/Screenshot-2022-08-22-at-10-22-20-Ecommerce.png",
    url: "https://regal-sawine-07f6e2.netlify.app/",
    caption: "Tienda E-commerce"
  },
  {
    src: "https://i.ibb.co/JHW64vT/Screenshot-2022-08-22-at-10-29-00-Pokedex.png",
    url: "https://golden-creponne-05da0a.netlify.app/",
    caption: "Pokedex",
  },
]; 

class Portafolio extends Component {
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

              <img src={item.src} alt={item.altText} width="100%" height="500px" style={{objectFit: "contain"}} />
            </a>
          <CarouselCaption
            captionText={item.caption}
            captionHeader={item.caption}
            />
        </CarouselItem>
          

      );
    });

    return (
      <section id="portfolio" style={{marginTop: "1in", }}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <h2 className="title" style={{marginBottom: "2in", }}>Portafolio</h2>
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

export default Portafolio;
