import React from "react";
import Carousel from "react-grid-carousel";
import data from "./data.json";
import "../styles/styles.css";
import "../styles/carrousel.css";

function Gallery() {
  return (
    <div className="carrousel">
      <h1 className="textocarrousel">Popular MYtineraries</h1>
      <Carousel
        cols={2}
        rows={2}
        gap={15}
        autoplay={4000}
        loop
        mobileBreakpoint={300}
        responsiveLayout={[
          {
            breakpoint: 1024,
            cols: 2,
            rows: 2,
            gap: 10,
            loop: true,
          },
          {
            breakpoint: 768,
            cols: 2,
            rows: 2,
            gap: 10,
            loop: true,
          },
          {
            breakpoint: 517,
            cols: 1,
            rows: 4,
            gap: 10,
            loop: true,
          },
        ]}
      >
        {data.map((ciudades) => {
          return (
            <Carousel.Item key={ciudades.id}>
              <h3 className="textocarrousel">{ciudades.ciudad}</h3>
              <img
                width="100%"
                src={ciudades.imagen}
                alt={ciudades.ciudad}
                className="imagenCiudades"
              />
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
}

export default Gallery;
