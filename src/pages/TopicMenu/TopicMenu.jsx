import Header from "../../components/Header/Header";
import { useNavigate, useParams } from "react-router-dom";
import "./TopicMenu.scss";
const topics = {
  physics: ["Kinematics", "Forces", "Circuits"],
  math: ["Composite Functions", "Common Graphs", "Trigonometry"],
};

function TopicMenu() {
  const { subject } = useParams();
  const navigate = useNavigate();
  const topicList = topics[subject];

  const handleClick = (path) => {
    setTimeout(() => {
      navigate(path);
    }, 200);
  };
  return (
    <div>
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
                onClick={() =>
                  handleClick(
                    `${
                      topic.charAt(0).toLowerCase() + topic.slice(1)
                    }/`.replace(/\s+/g, "")
                  )
                }
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
