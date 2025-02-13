import React from "react";
import Header from "../../../../components/Header/Header";
import SigFigs from "../../../../components/Notes/SigFigs/SigFigs";
import "./UncertaintiesNotes.scss";

function UncertaintiesNotes() {
  return (
    <div>
      <Header color="green"></Header>
      <div className="uncertainties-page">
        <h1 className="uncertainties-page__title">
          Uncertainties & Significant Figures
        </h1>
        <nav className="uncertainties-page__nav">
          <button className="uncertainties-page__button">Uncertainties</button>
          <button className="uncertainties-page__button">Adding/Subtracting with Uncertainties</button>
          <button className="uncertainties-page__button">Multiplication/Division with Uncertainties</button>
          <button className="uncertainties-page__button">Significant Figures</button>
          <button className="uncertainties-page__button">Counting Significant Figures</button>
        </nav>
        <SigFigs />
      </div>
    </div>
  );
}

export default UncertaintiesNotes;
