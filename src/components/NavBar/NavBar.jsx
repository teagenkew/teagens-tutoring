import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.scss";

function NavBar({ color }) {
  return (
    <nav className={`nav-bar nav-bar--${color}`}>
      <Link to="/physics/topics">
        <div className={`icon icon--physics icon--${color}`}></div>
        <p className="nav-bar__text">physics</p>
      </Link>
      <Link to="/math/topics">
        <div className={`icon icon--math icon--${color}`}></div>
        <p className="nav-bar__text">math</p>
      </Link>
      <Link to="/book">
        <div className={`icon icon--book icon--${color}`}></div>
        <p className="nav-bar__text">book</p>
      </Link>
      <Link to="/about">
        <div className={`icon icon--about icon--${color}`}></div>
        <p className="nav-bar__text">about</p>
      </Link>
    </nav>
  );
}

export default NavBar;
