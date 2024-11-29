import VectorNotes from "../../../../components/Notes/VectorNotes/VectorNotes";
import Header from "../../../../components/Header/Header";
import ProjectileMotion from "../../../../components/Notes/ProjectileMotion/ProjectileMotion";
import Comments from "../../../../components/Comments/Comments";
import "./KinematicsNotes.scss";
import { useRef } from "react";

function KinematicsNotes() {
  const vectorNotesRef = useRef(null);
  const projectileMotionRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      <Header color="purple" />
      <div className="kinematics-notes">
        <h1 className="kinematics-notes__title">Kinematics</h1>
        <nav className="kinematics-notes__nav">
          <button
            className="kinematics-notes__button"
            onClick={() => scrollToSection(vectorNotesRef)}
          >
            Vector Notes
          </button>
          <button
            className="kinematics-notes__button"
            onClick={() => scrollToSection(projectileMotionRef)}
          >
            Projectile Motion
          </button>
        </nav>

        <div ref={vectorNotesRef}>
          <VectorNotes />
        </div>
        <div ref={projectileMotionRef}>
          <ProjectileMotion />
        </div>
        <Comments />
      </div>
    </div>
  );
}

export default KinematicsNotes;
