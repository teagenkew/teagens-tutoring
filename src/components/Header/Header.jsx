import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/Logo.svg";
import "./Header.scss";

function Header({ color }) {
  const navigate = useNavigate();

  const handleClick = (path) => {
    setTimeout(() => {
      navigate(path);
    }, 200);
  };
  const themeClass = color ? `nav--${color}` : "";

  return (
    <nav className={`nav ${themeClass}`}>
      <Link to="/" className="nav__logo-link">
        <img src={logo} alt="teagens tutoring logo" className="nav__logo" />
      </Link>
      <div className="nav__button-container">
        <div className="nav__button" onClick={() => handleClick("/about")}>
          About
        </div>

        <div className="nav__button" onClick={() => handleClick("/book")}>
          Book A Session
        </div>
      </div>
    </nav>
  );
}

export default Header;
