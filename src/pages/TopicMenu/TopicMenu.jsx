import Header from "../../components/Header/Header";
import { useNavigate, useParams } from "react-router-dom";
import "./TopicMenu.scss";
const topics = {
  physics: [
    "Uncertainty & Significant Figures",
    "Kinematics",
    "Forces",
    "Circuits",
  ],
  math: ["Composite Functions", "Common Graphs", "Trigonometry"],
};

function TopicMenu() {
  const { subject } = useParams();
  const navigate = useNavigate();
  const topicList = topics[subject];

  const processPath = (path) => {
    let newPath = path.toLowerCase();
    newPath = newPath.replace(/&/g, " ");
    newPath = newPath.replace(/\s+/g, "-");

    return newPath;
  };

  const handleClick = (path) => {
    let URLpath = processPath(path);
    setTimeout(() => {
      navigate(URLpath);
    }, 200);
  };
  return (
    <div
      className={`topic-menu ${
        subject === "physics" ? "topic-menu--blue" : "topic-menu--orange"
      }`}
    >
      <Header color={subject == "physics" ? "blue" : "orange"} />
      <div className="topic-menu__container">
        <h1 className="topic-menu__title">
          {subject.charAt(0).toUpperCase() + subject.slice(1)}
        </h1>
        <ul className="topic-list">
          {topicList.map((topic, index) => {
            return (
              <div
                className="topic-container"
                key={index}
                onClick={() => handleClick(`${topic}`)}
              >
                <li className="topic">{topic}</li>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default TopicMenu;
