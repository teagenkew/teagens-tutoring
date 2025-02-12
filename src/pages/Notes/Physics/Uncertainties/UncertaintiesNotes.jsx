import React from "react";
import Header from "../../../../components/Header/Header";

function UncertaintiesNotes() {
  return (
    <div>
      <Header color="purple"></Header>
      <div>
        <h1>Uncertainties & Significant Figures</h1>
        <nav className="uncertainties-notes__nav">
            <button>Uncertainties</button>
            <button>Significant Figures</button>
        </nav>
      </div>
    </div>
  );
}

export default UncertaintiesNotes;
