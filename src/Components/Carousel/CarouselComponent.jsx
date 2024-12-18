import { Carousel } from "@material-tailwind/react";
import React from "react";

const CarouselComponent = () => {
  return (
    <Carousel
      className="w-[80%] rounded-xl"
      transition={{ duration: 1 }}
      autoplay={true}
      loop={true}
      autoplayDelay={5000}
    >
      <img
        src="https://images.uzum.uz/cs7s82lpq3ghb2qjbe6g/main_page_banner.jpg"
        alt="image 1"
        className="w-full h-full object-cover"
      />
      <img
        src="https://images.uzum.uz/cs7s82lpq3ghb2qjbe6g/main_page_banner.jpg"
        alt="image 2"
        className="w-full h-full object-cover"
      />
      <img
        src="https://images.uzum.uz/cs7s82lpq3ghb2qjbe6g/main_page_banner.jpg"
        alt="image 3"
        className="w-full h-full object-cover"
      />
    </Carousel>
  );
};

export default CarouselComponent;
