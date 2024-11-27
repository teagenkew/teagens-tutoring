import "./QuizList.scss";

const quizzes = ["Vectors", "Projectile Motion"];
function QuizList() {
  return (
    <div className="quiz-list">
      <h2 className="quiz-list__title">Quizzes</h2>
      <ol className="quiz-list__list">
        {quizzes.map((quiz, index) => {
          return (
            <li key={index} className="quiz-list__list-item">
              {quiz}
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default QuizList;
