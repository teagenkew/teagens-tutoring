import React from "react";
import NavBar from "../../../../components/NavBar/NavBar";
import QuizList from "../../../../components/QuizList/QuizList";
import HeaderNoNav from "../../../../components/HeaderNoNav/HeaderNoNav";
import AllQuestions from "../../../../components/AllQuestions/AllQuestions";
function KinematicsPQ() {
  return (
    <>
      <HeaderNoNav color={"purple"} />
      <div className="practice-question__container">
        <NavBar color={"purple"} />
        <QuizList />
        <AllQuestions />
      </div>
    </>
  );
}

export default KinematicsPQ;
