import { useNavigate } from "react-router-dom";
import { InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import "./VectorNotes.scss";

function VectorNotes() {
  const navigate = useNavigate();
  return (
    <div className="vector-notes">
      <h2 className="vector-notes__title">Vectors in Physics</h2>
      <p className="vector-notes__body">
        Vectors are quantities characterized by both magnitude and direction,
        making them essential for accurately describing physical phenomena.
        Unlike scalars, which only have magnitude (e.g., mass or temperature),
        vectors include properties like displacement, velocity, acceleration,
        and force. They are typically represented graphically by arrows, where
        the arrow's length indicates magnitude, and its orientation indicates
        direction. <br></br>Mathematically, vectors are expressed in component
        form, such as{" "}
        <InlineMath>
          {"\\mathbf{v} = \\langle v_x, v_y, v_z \\rangle"}
        </InlineMath>
        , representing the vector's projections onto the Cartesian coordinate
        axes. Operations with vectors include addition and subtraction, which
        can be performed graphically (using the tip-to-tail method) or
        analytically by adding corresponding components. Scalar multiplication
        alters a vector’s magnitude without changing its direction (unless the
        scalar is negative, which reverses it). The dot product and cross
        product are specialized vector operations used to find quantities like
        work (a scalar) or torque (a vector).<br></br> Vectors play a
        fundamental role in describing and solving problems in mechanics,
        electromagnetism, and other areas of physics.
      </p>
      <button
        className="notes__button"
        onClick={() => navigate("/physics/topics/kinematics/vectors-quiz")}
      >
        Quiz Myself on This Topic
      </button>
    </div>
  );
}

export default VectorNotes;
