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
      const fetchedQuestions = await fetchQuizQuestions("vector");
      setQuestions(fetchedQuestions);
    };
    getQuestions();
  }, []);

  const checkAnswer = async (userAnswer, key) => {
    let isCorrect = false;

    // Preprocess the user answer by replacing '/' with '(over)' and removing square brackets
    const processedUserAnswer = userAnswer
      .replace(/\//g, "(over)") // Replace all occurrences of '/' with '(over)'
      .replace(/\[|\]/g, " "); // Remove all square brackets

    const processedCorrectAnswer = questions[questionCount].answers[key]
      .replace(/\//g, "(over)")
      .replace(/\[|\]/g, "");

    const correctAnswer = await newtonSimplify(processedCorrectAnswer);
    const inputAnswer = await newtonSimplify(processedUserAnswer);

    isCorrect = correctAnswer === inputAnswer;
    console.log(isCorrect);
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
    setIsAnswerCorrect(null); // Reset answer state for the next question
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
          <div>
            <div>
              <p>{questionCount + 1}.</p>
              <p>{questions[questionCount].question}</p>
            </div>
            {Object.entries(questions[questionCount].parts)
              .sort(([keyA], [keyB]) => keyA.localeCompare(keyB))
              .map(([key, value], index) => (
                <div key={index}>
                  <p>{key}</p>
                  <p>{value}</p>
                  {questions[questionCount].questionType === "Single Answer" ? (
                    <>
                      <input
                        type="text"
                        placeholder={
                          questions[questionCount].answerPlaceholders[key]
                        }
                        onChange={(event) => handleAnswerChange(event, key)}
                        value={userAnswers[key] || ""}
                      />
                      <button
                        onClick={() => checkAnswer(userAnswers[key], key)}
                      >
                        Submit
                      </button>
                      {isAnswerCorrect !== null &&
                        (isAnswerCorrect ? (
                          <>
                            <p>Correct! Move onto the next question? </p>
                            <button onClick={nextQuestion}>Next</button>
                          </>
                        ) : (
                          <p>
                            that's not quite it. Try again or request some help
                          </p>
                        ))}
                    </>
                  ) : (
                    <p>multiple choice</p>
                  )}
                </div>
              ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Quiz;
