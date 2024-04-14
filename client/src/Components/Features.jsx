import React from "react";
import "./Features.css";

function Features(props) {
  return (
    <div className="feature-container">
      <img src={props.image} alt="feature" className="feature-image" />
      <h1>{props.heading}</h1>
      <p>{props.description}</p>
    </div>
  );
}

export default Features;
