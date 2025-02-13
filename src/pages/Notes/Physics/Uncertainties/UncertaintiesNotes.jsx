import { useRef } from "react";
import Header from "../../../../components/Header/Header";
import SigFigs from "../../../../components/Notes/SigFigs/SigFigs";
import Uncertainties from "../../../../components/Notes/Uncertainties/Uncertainties";
import "./UncertaintiesNotes.scss";

function UncertaintiesNotes() {
  const UncertaintiesRef = useRef(null);
  const SigFigsRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      <Header color="green"></Header>
      <div className="uncertainties-page">
        <h1 className="uncertainties-page__title">
          Uncertainties & Significant Figures
        </h1>
        <nav className="uncertainties-page__nav">
          <button className="uncertainties-page__button">Uncertainties</button>
          <button className="uncertainties-page__button">
            Adding/Subtracting with Uncertainties
          </button>
          <button className="uncertainties-page__button">
            Multiplication/Division with Uncertainties
          </button>
          <button className="uncertainties-page__button">
            Significant Figures
          </button>
          <button className="uncertainties-page__button">
            Counting Significant Figures
          </button>
        </nav>
        <div ref={UncertaintiesRef}>
          <Uncertainties />
        </div>
        <div ref={SigFigsRef}>
          <SigFigs />
        </div>
      </div>
    </div>
  );
}

export default UncertaintiesNotes;
