import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
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
      <div className="homepage">
        <div className="homepage__nav-container">
          <NavBar color={"pink"} />
        </div>
        <div className="main-container">
          <div
            className="physics"
            onClick={() => handleClick("/physics/topics")}
          >
            <h3 className="card__title">physics</h3>
            <div className="card__physics-icon"></div>
          </div>
          <div className="math" onClick={() => handleClick("/math/topics")}>
            <h3 className="card__title">math</h3>
            <div className="card__math-icon"></div>
          </div>
        </div>
        {/* <div className="homepage__about-container">
          <About />
        </div> */}
      </div>
    </>
  );
}

export default HomePage;
