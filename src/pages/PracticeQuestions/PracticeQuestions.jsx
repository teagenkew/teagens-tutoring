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

export default PracticeQuestions;
