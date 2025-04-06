import React from "react";
import styles from "./carousel.module.css";
import { Carousel } from "react-responsive-carousel";
import { img } from "./images/data";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselEffect = () => {
  return (
    <div>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
      >
        {img.map((images, i) => (
          <img key={i} src={images} />
        ))}
      </Carousel>
      <div className={styles.imgBottom}></div>
    </div>
  );
};

export default CarouselEffect;
