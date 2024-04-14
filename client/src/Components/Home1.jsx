import React from "react";
import "./Home1.css";
import img from "../assets/Graduates.png";
import { Link } from "react-router-dom";

function Home1() {
  return (
    <section className="box">
      <div className="container">
        <div className="image-container">
          <img className="home-image" src={img} alt="Graduates" />
        </div>
        <div className="left-holdings">
          <div className="descriptions">
            <h1 className="description-1">
              <strong>
                Transform your academic dreams into reality with Lumevo!
              </strong>
            </h1>
            <h3 className="description-2">
              With the support of our talented Language experts, we meticulously
              shape your SOPs and LORs to stand out and leave a lasting
              impression on admissions committees.
            </h3>
          </div>
          <div className="button-bundle">
            <Link className="button-handle">Sign Up</Link>
            <Link className="button-handle">Log In</Link>
          </div>
          <div className="descriptions">
            <p className="description-3">
              Sign up to access your dedicated portal, where you can securely
              upload documents for your SOP. <br></br>Connect directly with our
              experts, ensuring personalized assistance tailored to your needs
              and aspirations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home1;
