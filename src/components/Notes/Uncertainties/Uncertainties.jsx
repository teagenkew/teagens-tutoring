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
        No measurement is ever <span>totally</span> perfect. Even if you have a
        super precise timer with lots of decimal places, that last decimal place
        leaves us with some uncertainty about the measurement.
      </p>
      <p className="uncertainties__body">
        Let's say you're timing a swim race. Your swimmer touches the wall and
        you press stop on your stopwatch - it reads 25.544. That's pretty
        precise! But maybe someone beside you has an even more precise
        stopwatch, it reads 25.5443. Without a more precise instrument, you
        wouldn't have known if the swimmer was closer to 25.545 or 24.543, so
        that last digit gives us an uncertainty in our measurement.
      </p>
    </section>
  );
}

export default Uncertainties;
