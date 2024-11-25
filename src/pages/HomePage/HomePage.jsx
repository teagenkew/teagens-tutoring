import { Link, useNavigate } from "react-router-dom";
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
          physics
        </div>
        <div className="math" onClick={() => handleClick("/math/topics")}>
          math
        </div>
      </div>
    </>
  );
}

export default HomePage;
