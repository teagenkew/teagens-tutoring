import "./QuizList.scss";

const quizzes = ["Vectors", "Projectile Motion", "River Questions"];
function QuizList() {
  return (
    <div>
      <h2>Quizzes</h2>
      <ul className="quiz-list__list">
        {quizzes.map((quiz, index) => {
          return (
            <li key={index} className="quiz-list__list-item">
              {quiz}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default QuizList;
