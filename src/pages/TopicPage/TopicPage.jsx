import Header from "../../components/Header/Header";
import { useNavigate, useParams } from "react-router-dom";
import "./TopicPage.scss";
import notes from "../../assets/notes.png";
import practiceQuestions from "../../assets/practice-questions.png";
function TopicPage() {
  const { subject, topic } = useParams();
  const navigate = useNavigate();

  const formattedTopic = decodeURIComponent(
    topic.replace(/([a-z])([A-Z])/g, "$1 $2")
  );

  const handleClick = (path) => {
    setTimeout(() => {
      navigate(path);
    }, 200);
  };

  return (
    <div>
      <Header />
      <div className={`topic-page__container topic-page__container--${topic}`}>
        <h1 className="topic-page__title">
          {formattedTopic.charAt(0).toUpperCase() + formattedTopic.slice(1)}
        </h1>
        <div
          className={`topic-page__notes-container topic-page__notes-container--${topic}`}
          onClick={() => handleClick(`notes`)}
        >
          <h2 className="topic-page__notes-title">notes</h2>
          <img
            src={notes}
            alt="student studying big notebook"
            className="topic-page__image"
          />
        </div>
        <div
          className={`topic-page__pq-container topic-page__pq-container--${topic}`}
          onClick={() => handleClick(`practice-questions`)}
        >
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
