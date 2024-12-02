import React from "react";
import codingPhoto from "../../assets/coding.png";
import "./BeingBuilt.scss";

function BeingBuilt() {
  return (
    <div className="being-built">
      <h1 className="being-built__title">Under Construction</h1>
      <img
        className="being-built__image"
        src={codingPhoto}
        alt="hands coding a website"
      />
      <p className="being-built__text">
        This part of Teagen's Tutoring is still being built. Check back soon!
      </p>
    </div>
  );
}

export default BeingBuilt;
