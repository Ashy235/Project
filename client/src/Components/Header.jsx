import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";

function Header() {
  const location = useLocation();
  return (
    <header className="container">
      <div className="header-container">
        <Link to="/" className="logo-link">
          <div className="logo-container">
            <Logo />
            <h1 className="logo-text">Lumevo</h1>
          </div>
        </Link>
        <div className="nav-links">
          <Link
            to="/"
            className={location.pathname === "/" ? "active option" : "option"}
          >
            Home
          </Link>
          <Link
            to="/achievements"
            className={
              location.pathname === "/achievements" ? "active option" : "option"
            }
          >
            Achievements
          </Link>
          <Link
            to="/about-us"
            className={
              location.pathname === "/about-us" ? "active option" : "option"
            }
          >
            About Us
          </Link>

          <Link
            to="/contact-us"
            className={
              location.pathname === "/contact-us" ? "active option" : "option"
            }
          >
            Contact Us
          </Link>
        </div>
        <div className="auth-buttons">
          <Link className="button">Sign Up</Link>
          <Link className="button">Log In</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
