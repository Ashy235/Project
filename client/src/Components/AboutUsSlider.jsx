import React from "react";
import "./AboutUsSlider.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import Image1 from "../assets/PraveensamSir.jpeg";
import Image2 from "../assets/DivyajohnMam.jpeg";
import Image3 from "../assets/VijayabhaskarSir.png";
import Image4 from "../assets/MarthaMam.jpg";

export default function AboutUsSlider() {
  const arrNames = [
    "Praveen Sam",
    "Divya John",
    "Vijaya Bhaskhar Chandran",
    "Martha Karunakar",
  ];
  const description = [
    "Loreum ipsum",
    "Loreum ipsum",
    "Loreum ipsum",
    "Loreum ipsum",
  ];
  const Images = [Image1, Image2, Image3, Image4];

  return (
    <Swiper
      className="swiper-container"
      modules={[Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{ delay: 3000 }}
      centeredSlides={true}
    >
      {Images.map((image, index) => (
        <SwiperSlide key={index} className="slider-container">
          <img className="swiper-image" src={image} alt="" />
          <div className="slider-content">
            <h1>{arrNames[index]}</h1>
            <p>{description[index]}</p>
          </div>
        </SwiperSlide>
      ))}
      ...
    </Swiper>
  );
}
