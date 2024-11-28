import VectorNotes from "../../../../components/Notes/VectorNotes/VectorNotes";
import Header from "../../../../components/Header/Header";
import ProjectileMotion from "../../../../components/Notes/ProjectileMotion/ProjectileMotion";
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
      <h1>Kinematics</h1>
      <nav style={{ marginBottom: "20px" }}>
        <button onClick={() => scrollToSection(vectorNotesRef)}>
          Vector Notes
        </button>
        <button onClick={() => scrollToSection(projectileMotionRef)}>
          Projectile Motion
        </button>
      </nav>

      {/* Sections with refs */}
      <div ref={vectorNotesRef}>
        <VectorNotes />
      </div>
      <div ref={projectileMotionRef}>
        <ProjectileMotion />
      </div>
    </div>
  );
}

export default KinematicsNotes;
