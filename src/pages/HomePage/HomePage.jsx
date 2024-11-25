import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import "./HomePage.scss";
function HomePage() {
  return (
    <>
      <Header />
      <div className="main-container">
        <Link to="/physics/topics" className="subject-link">
          <div className="physics">physics</div>
        </Link>
        <Link to="/math/topics" className="subject-link">
          <div className="math">math</div>
        </Link>
      </div>
    </>
  );
}

export default HomePage;
