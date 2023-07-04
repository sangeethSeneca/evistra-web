import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const ImageSlider = () => {
  return (
    <Carousel showThumbs={false}>
      <div style={{ height: "600px" }}>
        <img src="images/slider-1.jpg" height={"600px"} />
        <p className="legend">Biking is the best way to destress.</p>
      </div>
      <div>
        <img src="images/slider-2.jpg" height={"600px"} />
        <p className="legend">Two wheels, one love!</p>
      </div>
      <div>
        <img src="images/slider-3.jpg" height={"600px"} />
        <p className="legend">Less stress on the heart</p>
      </div>
    </Carousel>
  );
};

export default ImageSlider;
