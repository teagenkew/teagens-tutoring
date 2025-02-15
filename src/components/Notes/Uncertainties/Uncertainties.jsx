import { useNavigate } from "react-router-dom";
import { InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import "./Uncertainties.scss";
import digitalMeasure from "../../../assets/digitalmeasurement.png";
import scaleMeasure from "../../../assets/scaleMeasurement.png";

function Uncertainties() {
  const navigate = useNavigate();

  return (
    <section className="uncertainties">
      <h2 className="uncertainties__title">Uncertainties</h2>
      <p className="uncertainties__body">
        No measurement is ever <span>totally</span> perfect. Even if you have a
        super precise timer with lots of decimal places, that last decimal place
        leaves us with some uncertainty about the measurement.
      </p>
      <p className="uncertainties__body">
        Let's say you're timing a swim race. Your swimmer touches the wall and
        you press stop on your stopwatch - it reads 25.54. That's pretty
        precise! But someone beside you is timing the same race with an even
        more precise watch - it reads 25.548. That extra digit may not seem like
        much represents a very small moment in time, but it reveals something
        interesting about our measurements. Without the more precise stopwatch,
        we wouldn't have known if our measurement was closer to 25.53 or 25.55.
        In other words, our stop-watch has a built in limit to how precisely it
        can measure time, and that introduces uncertainty into our measurement.
      </p>
      <p className="uncertainties__body">
        Uncertainty is about recognizing the limits of what we can measure.
        Every tool we use hasa level of uncertainty - whether that's a ruler, a
        scale or even a super precise laser. Scientists report uncertainties to
        make their results as accurate and meaningful as possible. Uncertainties
        help us keep our feet on the ground!
      </p>
      <h3 className="uncertainties__subtitle">
        Determining Uncertainty of a Tool
      </h3>
      <h4 className="uncertainties__subsubtitle">
        Digital Measuring Devices (Timers, Digital Scales)
      </h4>
      <p>
        Let's continue with our swim race example. We measured 25.54 s - but we
        don't know anything more beyond that. For example was the clock{" "}
        <span className="uncertainties__emphasis">just</span> about to change to
        25.55 s? or had it <span>just</span> turned to 25.54? This uncertainty
        is built into timers, so we decide that the uncertainty of a timer is
        the smallest digit it can measure.
      </p>
      <div className="uncertainties__image-container">
        <p>
          Example: 25.54 s +/- 0.01 s , 3.0 s +/- 0.1 s , 45.0008 s +/- 0.0001 s
        </p>
        <img className="uncertainties__notes-image" src={digitalMeasure}></img>
      </div>
      <h4 className="uncertainties__subsubtitle">
        Scale Devices (Rulers, Mercury Thermometer, )
      </h4>
      <p>
        Anything that you yourself are deciding the measurement by reading it is
        a scale measure. The easiest example of this is a ruler, We can measure
        accurately to the closest millimeter on most rulers, and then we have to
        guess in that in between space. So for this reason, the uncertainty of
        scale measurements is the smallest increment divided by 2.
      </p>
      <div className="uncertainties__image-container">
        <p>
          Example: 56.7 cm +/- 0.05 cm , 3.0 s +/- 0.1 s , 45.0008 s +/- 0.0001
          s
        </p>
        <img className="uncertainties__notes-image" src={scaleMeasure}></img>
      </div>
    </section>
  );
}

export default Uncertainties;
