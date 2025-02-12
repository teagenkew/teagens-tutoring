import React from "react";
import Header from "../../../../components/Header/Header";
import SigFigs from "../../../../components/Notes/SigFigs/SigFigs";
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
        <SigFigs />
      </div>
    </div>
  );
}

export default UncertaintiesNotes;
