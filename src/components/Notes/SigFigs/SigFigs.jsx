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
        <li className="sigfigs-notes__list-item">
          Trapped zeros are significat
        </li>
        <li className="sigfigs-notes__list-item">
          Leading zeros and trailing zeros <span>with no decimal place</span>{" "}
          are not significant.
        </li>

        <li>If there is a decimal:</li>
        <ul>
          <li>
            If the number to the left is 0: Only numbers on the right side of
            the decimal place that are trapped or follow a non-zero number are
            significant. <br></br>
            For example: <InlineMath math="0.00506" /> has 3 Sig Figs.{" "}
            <InlineMath math="0.10001" /> has 5 Sig Figs.{" "}
            <InlineMath math="0.0000000040" /> has 2 Sig Figs.
          </li>
          <li>
            If the number to the left of the decimal is not 0: The decimal point
            makes all trailing zeros significant.<br></br> For example:{" "}
            <InlineMath math="10.0" /> has 3 Sig Figs.{" "}
            <InlineMath math="1989.00" /> has 6 Sig Figs.{" "}
            <InlineMath math="1.000" /> has 4 Sig Figs.
          </li>
        </ul>
      </ul>
      <table className="sigfig-notes__examples">
        <tr>
          <th>Example</th>
          <th>Number of Sig Figs</th>
        </tr>
        <tr>
          <td>300</td>
          <td>1</td>
        </tr>
        <tr>
          <td>300.0</td>
          <td>4</td>
        </tr>
        <tr>
          <td>0.004050</td>
          <td>4</td>
        </tr>
        <tr>
          <td>10.0</td>
          <td>3</td>
        </tr>
        <tr>
          <td>0.005</td>
          <td>1</td>
        </tr>
        <tr>
          <td>14.6</td>
          <td>3</td>
        </tr>
      </table>
    </section>
  );
}

export default SigFigs;
