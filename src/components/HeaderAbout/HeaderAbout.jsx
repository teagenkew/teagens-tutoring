import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/Logo.svg";

function HeaderAbout({ color }) {
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
        <div className="nav__button" onClick={() => handleClick("/")}>
          Home
        </div>

        <div className="nav__button" onClick={() => handleClick("/book")}>
          Book A Session
        </div>
      </div>
    </nav>
  );
}

export default HeaderAbout;
