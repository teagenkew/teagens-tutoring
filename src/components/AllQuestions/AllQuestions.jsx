import "./AllQuestions.scss";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from "../Loading/Loading";
const BASE_URL = import.meta.env.VITE_BASE_URL;

function AllQuestions({ color }) {
  const [keywords, setKeywords] = useState([]);
  const [allQuestions, setAllQuestions] = useState([]);
  const [selectedKeywords, setSelectedKeywords] = useState([]);
  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const { subject, topic } = useParams();

  const getQuestions = async () => {
    const questions = await axios.get(`${BASE_URL}/questions`);
    return questions.data;
  };
  const getKeywords = async () => {
    const keywords = await axios.get(`${BASE_URL}/keywords`);
    return keywords.data;
  };

  const handleTagClick = (keyword) => {
    setSelectedKeywords((prevSelected) => {
      if (prevSelected.includes(keyword)) {
        return prevSelected.filter((kw) => kw !== keyword);
      } else {
        return [...prevSelected, keyword];
      }
    });
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const keywordsData = await getKeywords();
        setKeywords(keywordsData); // Update keywords state
        const questionsData = await getQuestions();
        setAllQuestions(questionsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const filter = allQuestions.filter((question) => {
      const matchesSubjectAndTopic =
        question.subject.toLowerCase() === subject.toLowerCase() &&
        question.topic.toLowerCase() === topic.toLowerCase();
      const matchesKeywords =
        selectedKeywords.length === 0 ||
        selectedKeywords.every((keyword) =>
          question.keywords.includes(keyword)
        );

      return matchesSubjectAndTopic && matchesKeywords;
    });
    setFilteredQuestions(filter);
  }, [subject, topic, allQuestions, selectedKeywords]);

  return (
    <>
      {allQuestions ? (
        <Loading />
      ) : (
        <div className="all-q__container">
          <h2 className="all-q__title"> All Questions</h2>
          <div className="all-q__tags-container">
            {keywords.map((keyword, index) => {
              return (
                <div
                  key={index}
                  className={`all-q__tag ${
                    selectedKeywords.includes(keyword)
                      ? `all-q__tag--selected-${color}`
                      : `all-q__tag--${color}`
                  }`}
                  onClick={() => handleTagClick(keyword)}
                >
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
      )}
    </>
  );
}

export default AllQuestions;
