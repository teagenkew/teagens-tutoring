import React from "react";
import NavBar from "../../../../components/NavBar/NavBar";
import QuizList from "../../../../components/QuizList/QuizList";
import HeaderNoNav from "../../../../components/HeaderNoNav/HeaderNoNav";
function KinematicsPQ() {
  return (
    <>
      <HeaderNoNav color={"purple"} />
      <div className="practice-question__container">
        <NavBar color={"purple"} />
        <QuizList />
      </div>
    </>
  );
}

export default KinematicsPQ;
