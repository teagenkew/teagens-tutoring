import { useNavigate } from "react-router-dom";
import { InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import "./Uncertainties.scss";

function Uncertainties() {
  const navigate = useNavigate();

  return (
    <section className="uncertainties-">
      <h2 className="uncertainties__title">Uncertainties</h2>
      <p className="uncertainties__body">
        Significant figures (sometimes called significant digits) are a way for
        scientists to relay the certainty of a measurement, and ensure
        consistency across calculations. As the number of significant figures
        increases, the more certain the measurement. We use significant figures
        to <span className="uncertainties__emphasis">reflect precision</span>.
        Using significant figures also prevents-over rounding or over-precision,
        it's a standardized way to ensure consistent calculations.
      </p>
      <p className="uncertainties__body">
        For example, 9.14 m is a more precise measurement than 9.1 m - three
        significant digits show us that there is less uncertainty in the first
        measurement than the second.
      </p>
    </section>
  );
}

export default Uncertainties;
