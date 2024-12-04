import "./PracticeQuestions.scss";
import NavBar from "../../components/NavBar/NavBar";
import QuizList from "../../components/QuizList/QuizList";
import HeaderNoNav from "../../components/HeaderNoNav/HeaderNoNav";
import AllQuestions from "../../components/AllQuestions/AllQuestions";
import { useLocation } from "react-router-dom";

function PracticeQuestions() {
  const location = useLocation();
  let color;
  const topic = location.pathname.split("/")[3];
  if (topic === "kinematics" || topic === "compositeFunctions") {
    color = "purple";
  } else if (topic === "forces" || topic === "commonGraphs") {
    color = "red";
  } else if (topic === "circuits" || topic === "trigonometry") {
    color = "green";
  }
  return (
    <div className={`practice-questions practice-questions--${color}`}>
      <HeaderNoNav color={color} />
      <div className="practice-questions__container">
        <div className="practice-questions__nav-desktop">
          <NavBar color={color} direction={"column"} />
        </div>
        <div className="practice-questions__nav-mobile">
          <NavBar color={color} direction={"row"} />
        </div>
        <div className="practice-questions__questions-container">
          <QuizList />
          <AllQuestions color={color} />
        </div>
      </div>
    </div>
  );
}

export default PracticeQuestions;
