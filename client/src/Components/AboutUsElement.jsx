import React from "react";
import "./AboutUsElement.css";

function AboutUsElement(props) {
  return (
    <div className="about-element">
      <div className="element" style={{ flexDirection: props.direction }}>
        <div className="element-image">
          <img src={props.image} />
        </div>
        <div className="element-text">
          <h1>{props.heading}</h1>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
}

export default AboutUsElement;
