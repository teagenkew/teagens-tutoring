import "./KinematicsPQ.scss";
import NavBar from "../../../../components/NavBar/NavBar";
import QuizList from "../../../../components/QuizList/QuizList";
import HeaderNoNav from "../../../../components/HeaderNoNav/HeaderNoNav";
import AllQuestions from "../../../../components/AllQuestions/AllQuestions";
import { useLocation } from "react-router-dom";

function KinematicsPQ() {
  const location = useLocation();
  let color;
  const topic = location.pathname.split("/")[3];
  if (topic === "kinematics") {
    color = "purple";
  } else if (topic === "forces") {
    color = "red";
  } else if (topic === "circuits") {
    color = "orange";
  }

  return (
    <>
      <HeaderNoNav color={color} />
      <div className="practice-question__container">
        <NavBar color={color} />
        <QuizList />
        <AllQuestions color={color} />
      </div>
    </>
  );
}

export default KinematicsPQ;
