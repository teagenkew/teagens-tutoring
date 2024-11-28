import "./QuizHeader.scss";

function QuizHeader({ topic, unit, width }) {
  return (
    <div className="quiz-header">
      <h1 className="quiz-header__title">
        {topic.charAt(0).toUpperCase() + topic.slice(1)} -
        {' ' + unit.charAt(0).toUpperCase() + unit.slice(1)}
      </h1>
      <div className="progress-bar__bg">
        <div className="progress" style={{ width: `${width}%` }}></div>
      </div>
    </div>
  );
}

export default QuizHeader;
