import VectorNotes from "../../../../components/Notes/VectorNotes/VectorNotes";
import Header from "../../../../components/Header/Header";
import ProjectileMotion from "../../../../components/Notes/ProjectileMotion/ProjectileMotion";
import Comments from "../../../../components/Comments/Comments";
import NewComment from "../../../../components/NewComment/NewComment";
import "./KinematicsNotes.scss";
import { useRef, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
const BASE_URL = import.meta.env.VITE_BASE_URL;

function KinematicsNotes() {
  const vectorNotesRef = useRef(null);
  const projectileMotionRef = useRef(null);

  const location = useLocation();
  const path = location.pathname;
  const topic = path.split("/")[3];
  const [comments, setComments] = useState([]);
  const getComments = async (topic) => {
    const response = await axios.get(`${BASE_URL}/comments/${topic}`);
    setComments(response.data);
    return response.data;
  };
  useEffect(() => {
    const fetchComments = async () => {
      await getComments(topic);
    };
    fetchComments();
  }, [topic]);

  const refetchComments = () => {
    getComments(topic);
  };

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="kinematics-notes">
      <Header color="purple" />
      <div className="kinematics-notes__container">
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

        <div ref={vectorNotesRef} className="kinematics-notes__container-one">
          <VectorNotes />
        </div>
        <div
          ref={projectileMotionRef}
          className="kinematics-notes__container-two"
        >
          <ProjectileMotion />
        </div>
        <NewComment refetchComments={refetchComments} topic={topic} />
        <Comments comments={comments} />
      </div>
    </div>
  );
}

export default KinematicsNotes;
