import { useNavigate } from "react-router-dom";
import { InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import "./CompositeFunctions.scss";
import React from "react";

function CompositeFunctions() {
  const navigate = useNavigate();
  return (
    <div className="composite-notes">
      <h2 className="composite-notes__title">Composite Functions</h2>
      <p className="composite-notes__body">
        Composite functions combine two functions into one. The output of one
        function becomes the input of another function, and the result of the
        combination is our{" "}
        <span className="notes-emphasis">composite function!</span> If we think
        about this in terms of graphing... the <span>y</span> values of graph
        one become the
        <span>x</span>
        values of graph two.<br></br> The notation for composite functions is
        either:<br></br>
        <InlineMath>{"f \\circ g"}</InlineMath> or{" "}
        <InlineMath>{"f(g(x))"}</InlineMath>
      </p>
    </div>
  );
}

export default CompositeFunctions;
