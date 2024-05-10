import React from "react";
import "./AboutUs1.css";
import Image1 from "../assets/Hellow.webp";

function AboutUs1() {
  return (
    <div className="about-container">
      <div className="about-1">
        <div className="about-1-1">
          <h1>About Us</h1>
          <p>
            HubSpot's company and culture are a lot like our product. They're
            crafted, not cobbled, for a delightful experience.
          </p>
        </div>
        <div className="about-1-2">
          <img src={Image1} className="about-image-1" />
        </div>
      </div>
    </div>
  );
}

export default AboutUs1;
