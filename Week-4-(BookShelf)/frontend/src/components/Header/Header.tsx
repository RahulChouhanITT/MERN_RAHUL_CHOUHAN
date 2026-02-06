import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";
import { IMAGE_PATHS } from "../../utils/constants/constants";

const Header: React.FC = () => {
  return (
    <header className="app-header">
      <div className="header-logo">
        <img
          src={IMAGE_PATHS.BOOKSHELF_LOGO}
          alt="Bookshelf logo"
          className="logo-image"
        />
        <span>
          <strong>BookShelf</strong>
        </span>
      </div>

      <div className="header-actions">
        <nav className="header-nav">
          <NavLink to="/" end className="nav-link">
            Home
          </NavLink>

          <NavLink to="/about" className="nav-link">
            About
          </NavLink>

          <NavLink to="/favourite" className="nav-link">
            Favourite
          </NavLink>
        </nav>

        <div className="user-avatar">
          <img
            src={IMAGE_PATHS.USER_LOGO}
            alt="User profile"
            className="user-image"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
