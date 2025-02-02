import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/Logo.svg";
import "./HeaderNoNav.scss";

function HeaderNoNav({ color }) {
  const themeClass = color ? `header-no-nav--${color}` : "";
  return (
    <nav className={`header-no-nav ${themeClass}`}>
      <Link to="/" className="nav__logo-link">
        <img src={logo} alt="teagens tutoring logo" className="nav__logo" />
      </Link>
    </nav>
  );
}

export default HeaderNoNav;
