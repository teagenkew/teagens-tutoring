import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
const BASE_URL = import.meta.env.VITE_BASE_URL;
import QuizHeader from "../../components/QuizHeader/QuizHeader";
import NavBar from "../../components/NavBar/NavBar";
import "./Quiz.scss";
function Quiz() {
  const { subject, topic, unitQuiz } = useParams();
  const unit = unitQuiz.split("-")[0];
  const [questions, setQuestions] = useState([]);
  const [questionCount, setQuestionCount] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);

  const newtonSimplify = async (expression) => {
    const response = await axios.get(
      `https://newton.now.sh/api/v2/simplify/(${expression})`
    );
    return response.data.result;
  };
  const fetchQuizQuestions = async (quizTopic) => {
    try {
      const response = await axios.get(`${BASE_URL}/questions/${quizTopic}`);
      return response.data;
    } catch (err) {
      console.log("error getting questions for quiz", err);
    }
  };

  useEffect(() => {
    const getQuestions = async () => {
      const fetchedQuestions = await fetchQuizQuestions(unit);
      setQuestions(fetchedQuestions);
    };
    getQuestions();
  }, []);

  const checkAnswer = async (userAnswer, key) => {
    if (!userAnswer) {
      return;
    }

    let isCorrect = false;

    const processedUserAnswer = userAnswer
      .replace(/\//g, "(over)")
      .replace(/\[|\]/g, " ");

    const processedCorrectAnswer = questions[questionCount].answers[key]
      .replace(/\//g, "(over)")
      .replace(/\[|\]/g, "");

    const correctAnswer = await newtonSimplify(processedCorrectAnswer);
    const inputAnswer = await newtonSimplify(processedUserAnswer);

    isCorrect = correctAnswer === inputAnswer;
    setIsAnswerCorrect(isCorrect);
  };

  const handleAnswerChange = (event, key) => {
    setUserAnswers((prevAnswers) => ({
      ...prevAnswers,
      [key]: event.target.value,
    }));
  };

  const nextQuestion = () => {
    setQuestionCount((prevCount) => prevCount + 1);
    setIsAnswerCorrect(null);
    setUserAnswers({});
  };

  return (
    <>
      <QuizHeader topic={topic} unit={unit} width={questionCount * 10 + 10} />
      <div className="quiz__container">
        <NavBar color="purple" />
        {!questions[questionCount] ? (
          <div>Loading...</div>
        ) : (
          <div className="quiz__question-container">
            <div className="quiz__main-question-container">
              <p className="quiz__question-number">{questionCount + 1}.</p>
              <p className="quiz__question">
                {questions[questionCount].question}
              </p>
            </div>
            {Object.entries(questions[questionCount].parts)
              .sort(([keyA], [keyB]) => keyA.localeCompare(keyB))
              .map(([key, value], index) => (
                <div key={index} className="quiz__submission-container">
                  <div className="quiz__question-part-container">
                    <p className="quiz__question-number">{key}.</p>
                    <p className="quiz__question">{value}</p>
                  </div>
                  <>
                    <input
                      className="quiz__input"
                      type="text"
                      placeholder={
                        questions[questionCount].answerPlaceholders[key]
                      }
                      onChange={(event) => handleAnswerChange(event, key)}
                      value={userAnswers[key] || ""}
                    />
                    <button
                      className="quiz__submit-button"
                      onClick={() => checkAnswer(userAnswers[key], key)}
                    >
                      Submit
                    </button>

                    {isAnswerCorrect !== null &&
                      (isAnswerCorrect ? (
                        <>
                          <p className="quiz__feedback">
                            <strong>Correct!</strong> Move onto the next question?{" "}
                          </p>
                          <button
                            className="quiz__next-button"
                            onClick={nextQuestion}
                          >
                            Next
                          </button>
                        </>
                      ) : (
                        <>
                          <p className="quiz__feedback">
                            That's not quite it. Give it another try or move
                            onto the next question.
                          </p>
                          <button
                            className="quiz__next-button"
                            onClick={nextQuestion}
                          >
                            Next
                          </button>
                        </>
                      ))}
                  </>
                </div>
              ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Quiz;
