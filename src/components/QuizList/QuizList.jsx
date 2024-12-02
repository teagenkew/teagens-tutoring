import "./QuizList.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
const BASE_URL = import.meta.env.VITE_BASE_URL;

function QuizList() {
  const navigate = useNavigate();
  const { subject, topic } = useParams();

  const [quizzes, setQuizzes] = useState([]);

  function transformStringForPath(str) {
    return str.toLowerCase().replace(/\s+/g, "-");
  }

  function transformStringForDisplay(str) {
    return str
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalize each word
      .join(" ");
  }
  const handleClick = (quiz) => {
    const processedStr = transformStringForPath(quiz);
    navigate(`/${subject}/topics/${topic}/${processedStr}-quiz`);
  };

  useEffect(() => {
    const getQuizzes = async (unit) => {
      try {
        const response = await axios.get(`${BASE_URL}/quizzes/${unit}`);
        setQuizzes(response.data.map((quiz) => quiz.quiz_name));
      } catch (err) {
        console.error("Error fetching quizzes:", err);
      }
    };
    getQuizzes(topic);
  }, [topic]);
  return (
    <div className="quiz-list">
      <h2 className="quiz-list__title">Quizzes</h2>
      <ol className="quiz-list__list">
        {quizzes.length > 0 ? (
          quizzes.map((quiz, index) => {
            return (
              <li
                key={index}
                className="quiz-list__list-item"
                onClick={() => handleClick(quiz)}
              >
                {transformStringForDisplay(quiz)}
              </li>
            );
          })
        ) : (
          <div className="quiz-list__no-quizzes">
            Hang tight! No quizzes yet
          </div>
        )}
      </ol>
    </div>
  );
}

export default QuizList;
