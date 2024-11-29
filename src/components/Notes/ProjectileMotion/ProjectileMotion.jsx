import "./ProjectileMotion.scss";
import { InlineMath } from "react-katex";
import { useNavigate } from "react-router-dom";
import "katex/dist/katex.min.css";

function ProjectileNotes() {
  const navigate = useNavigate();
  return (
    <div className="projectile-notes">
      <h2 className="projectile-notes__title">Projectile Motion in Physics</h2>
      <p className="projectile-notes__body">
        Projectile motion describes the motion of an object launched into the
        air, subject to gravity's influence and no air resistance. It is a type
        of two-dimensional motion where the horizontal and vertical components
        of motion are independent of each other.
      </p>
      <p className="projectile-notes__body">
        The horizontal motion has a constant velocity since there are no
        horizontal forces acting (neglecting air resistance). Its displacement
        is given by <InlineMath>{"x = v_x t"}</InlineMath>, where{" "}
        <InlineMath>{"v_x"}</InlineMath> is the horizontal velocity and{" "}
        <InlineMath>{"t"}</InlineMath> is the time.
      </p>
      <p className="projectile-notes__body">
        The vertical motion is affected by gravity, which causes constant
        acceleration. The vertical displacement is given by{" "}
        <InlineMath>{"y = v_{y_0} t - \\frac{1}{2} g t^2"}</InlineMath>, where{" "}
        <InlineMath>{"v_{y_0}"}</InlineMath> is the initial vertical velocity,{" "}
        <InlineMath>{"g"}</InlineMath> is the acceleration due to gravity (
        <InlineMath>{"9.8 \\, \\mathrm{m/s^2}"}</InlineMath>), and{" "}
        <InlineMath>{"t"}</InlineMath> is the time.
      </p>
      <p className="projectile-notes__body">
        The object’s trajectory forms a parabola, and the range, maximum height,
        and time of flight can be determined using initial velocity{" "}
        <InlineMath>{"v_0"}</InlineMath> and launch angle{" "}
        <InlineMath>{"\\theta"}</InlineMath>. The initial velocity components
        are <InlineMath>{"v_x = v_0 \\cos\\theta"}</InlineMath> and{" "}
        <InlineMath>{"v_y = v_0 \\sin\\theta"}</InlineMath>.
      </p>
      <button
        className="notes__button"
        onClick={() =>
          navigate("/physics/topics/kinematics/projectile-motion-quiz")
        }
      >
        Quiz Myself
      </button>
    </div>
  );
}

export default ProjectileNotes;
