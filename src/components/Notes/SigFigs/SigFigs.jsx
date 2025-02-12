import { useNavigate } from "react-router-dom";
import { InlineMath } from "react-katex";
import "katex/dist/katex.min.css";

import React from "react";

function SigFigs() {
  const navigate = useNavigate();
  return (
    <section className="sigfigs-notes">
      <h2 className="sigfigs-notes__title">Significant Figures</h2>
      <p className="sigfigs-notes__body">
        Significant figures (sometimes called significant digits) are a way for
        scientists to relay the certainty of a measurement, and ensure
        consistency across calculations. As the number of significant figures
        increases, the more certain the measurement. We use significant figures
        to <span className="sigfig-notes__emphasis">reflect precision</span>.
        Using significant figures also prevents-over rounding or over-precision,
        it's a standardized way to ensure consistent calculations.
      </p>
      <p className="sigfigs-notes__body">
        For example, 9.14 m is a more precise measurement than 9.1 - three
        significant digits show us that there is less uncertainty in the first
        measurement than the second.
      </p>

      <h3 className="sigfigs-notes__subtitle">Counting Significant Figures</h3>
      <ul className="sigfigs-notes__list">
        <li className="sigfigs-notes__list-item">
          All nonzero numbers are{" "}
          <span className="sigfigs-notes__emphasis">always</span> significant
        </li>
        <li className="sigfigs-notes__list-item">Trapped zeros count!</li>
        <li className="sigfigs-notes__list-item">
          Leading zeros and trailing zeros <span>with no decimal place</span>{" "}
          don't count.
        </li>
        <li className="sigfigs-notes__list-item">
          If there is a decimal: Zeros to the right of the decimal count if they
          follow a non-zero digit.
        </li>
      </ul>
      <div className="sigfig-notes__examples">
        
      </div>
    </section>
  );
}

export default SigFigs;
