import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
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
          <Link className="option">Home</Link>
          <Link className="option">Achievements</Link>
          <Link to="/about-us" className="option">
            About Us
          </Link>
          <Link className="option">Contact Us</Link>
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
