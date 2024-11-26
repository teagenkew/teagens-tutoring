import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.scss";

function NavBar({ color }) {
  return (
    <nav className={`nav-bar nav-bar--${color}`}>
      <Link to="/physics/topics">
        <div className="physics-icon"></div>
      </Link>
      <Link to="/math/topics">
        <div className="math-icon"></div>
      </Link>
      <Link to="/book">
        <div className="book-icon"></div>
      </Link>
      <Link to="/about">
        <div className="about-icon"></div>{" "}
      </Link>
    </nav>
  );
}

export default NavBar;
