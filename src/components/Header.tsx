import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "../styles/Header.css";

const Header: React.FC = () => {
  const location = useLocation();

  return (
    <header>
      <div className="name">Julius Grimm</div>
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
        <NavLink
          to="/resume"
          className={location.pathname === "/resume" ? "active" : ""}
        >
          Resume
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
