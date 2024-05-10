import React from "react";
import "./AboutUs2.css";
import AboutUsSlider from "./AboutUsSlider";

function AboutUs2() {
  return (
    <div className="about-2-container">
      <div className="heading-slider">
        <h1>Our Experts</h1>
      </div>
      <div className="slider">
        <AboutUsSlider />
      </div>
    </div>
  );
}

export default AboutUs2;
