import Header from "../../components/Header/Header";
import { useNavigate, useParams } from "react-router-dom";
import "./TopicPage.scss";
import notes from "../../assets/notes.png";
import practiceQuestions from "../../assets/practice-questions.png";
function TopicPage() {
  const { subject, topic } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <div className="topic-page__container">
        <h1 className="topic-page__title">
          {topic.charAt(0).toUpperCase() + topic.slice(1)}
        </h1>
        <div className="topic-page__notes-container">
          <h2 className="topic-page__notes-title">notes</h2>
          <img
            src={notes}
            alt="student studying big notebook"
            className="topic-page__image"
          />
        </div>
        <div className="topic-page__pq-container">
          <h2 className="topic-page__pq-title">practice questions</h2>
          <img
            src={practiceQuestions}
            alt="laptop with a quiz on it"
            className="topic-page__image"
          />
        </div>
      </div>
    </div>
  );
}

export default TopicPage;
