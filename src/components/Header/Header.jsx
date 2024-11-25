import { Link } from "react-router-dom";
import logo from "../../assets/Logo.svg";
import "./Header.scss";

function Header() {
  return (
    <nav className="nav">
      <Link to="/" className="nav__logo-link">
        <img src={logo} alt="teagens tutoring logo" className="nav__logo" />
      </Link>
      <div className="nav__button-container">
        <Link to="/about">
          <div className="nav__button">About</div>
        </Link>
        <Link to="/book">
          <div className="nav__button">Book A Session</div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
