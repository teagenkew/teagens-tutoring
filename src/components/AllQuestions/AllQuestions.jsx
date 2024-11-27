import "./AllQuestions.scss";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
const BASE_URL = import.meta.env.VITE_BASE_URL;

function AllQuestions() {
  const [questions, setQuestions] = useState([]);
  const [keywords, setKeywords] = useState([]);
  const { subject, topic } = useParams();

  const getQuestions = async () => {
    const questions = await axios.get(`${BASE_URL}/questions`);
    return questions.data;
  };
  const getKeywords = async () => {
    const keywords = await axios.get(`${BASE_URL}/keywords`);
    return keywords.data;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const keywordsData = await getKeywords();
        setKeywords(keywordsData); // Update keywords state
        const questionsData = await getQuestions();
        setQuestions(questionsData); // Optional: Update questions state
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const filteredQuestions = questions.filter((question) => {
    return (
      question.subject.toLowerCase() === subject &&
      question.unit.toLowerCase() === topic
    );
  });
  // Conditional rendering: wait until questions are loaded
  if (questions.length === 0 || keywords.length === 0) {
    return <div>Loading...</div>;
  }
  console.log(filteredQuestions);
  return (
    <div>
      <h2>All Questions</h2>
      <div className="all-q__tags-container">
        {keywords.map((keyword, index) => {
          return (
            <div key={index} className="all-q__tag">
              {keyword}
            </div>
          );
        })}
      </div>
      <div className="all-q__questons-container">
        <ul className="all-q__list">
          {filteredQuestions.map((question) => {
            return (
              <li key={question.id} className="all-q__list-item">
                {question.question}
                <div>
                  {Object.entries(question.parts)
                    .sort(([keyA], [keyB]) => keyA.localeCompare(keyB))
                    .map(([key, part]) => (
                      <div key={key} className="part">
                        <span className="part-key">{key})</span> {part}
                      </div>
                    ))}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default AllQuestions;
