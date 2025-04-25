import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import "../styles/Header.css";

const Header: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNameClick = () => {
    navigate("/");
  };

  return (
    <header>
      <div
        className="name"
        onClick={handleNameClick}
        style={{ cursor: "pointer" }}
      >
        Julius Grimm
      </div>
      <nav className="nav-items">
        <NavLink to="/" className={location.pathname === "/" ? "active" : ""}>
          Work
        </NavLink>
        <NavLink
          to="/info"
          className={location.pathname === "/info" ? "active" : ""}
        >
          Info
        </NavLink>
        <a href="mailto:me@juliusgrimm.dev" className="contact-link">
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Header;
