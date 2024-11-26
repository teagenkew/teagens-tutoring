import { useNavigate } from "react-router-dom";
import physicsImage from "../../assets/physics-home.png";
import mathImage from "../../assets/math-home.png";
import physicsIcon from "../../assets/physics-icon.svg";
import mathIcon from "../../assets/math-icon.svg";
import Header from "../../components/Header/Header";
import "./HomePage.scss";

function HomePage() {
  const navigate = useNavigate();

  const handleClick = (path) => {
    setTimeout(() => {
      navigate(path);
    }, 200);
  };
  return (
    <>
      <Header />
      <div className="main-container">
        <div className="physics" onClick={() => handleClick("/physics/topics")}>
          <h3 className="card__title">physics</h3>
          <div className="card__physics-icon"></div>
        </div>
        <div className="math" onClick={() => handleClick("/math/topics")}>
          <h3 className="card__title">math</h3>
          <div className="card__math-icon"></div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
