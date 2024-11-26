import React from "react";
import { useParams } from "react-router-dom";

function AllQuestions() {
  const { subject, topic } = useParams();
  return <div>AllQuestions</div>;
}

export default AllQuestions;
