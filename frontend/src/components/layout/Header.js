import React from "react";
import { Link, NavLink } from "react-router-dom";
import axiosInstance from "../../services/axiosAPI";
import Cookies from "js-cookie";

const handleLogout = () => {
  // localStorage.removeItem("access_token");
  // localStorage.removeItem("refresh_token");
  Cookies.remove("access_token");
  Cookies.remove("refresh_token");
  axiosInstance.defaults.headers["Authorization"] = null;
  // window.location.href = "/login";
};

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
      <NavLink to="/" className="navbar-brand">
        Navbar
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <NavLink to="/" className="nav-link">
              Home <span className="sr-only">(current)</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/login" className="nav-link">
              Zaloguj
            </NavLink>
          </li>
          <li className="nav-item dropdown">
            <NavLink
              className="nav-link dropdown-toggle"
              to="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dropdown
            </NavLink>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <NavLink className="dropdown-item" to="/register">
                Zarejestruj
              </NavLink>
              <NavLink className="dropdown-item" to="/">
                Another action
              </NavLink>
              <div className="dropdown-divider"></div>
              <NavLink className="dropdown-item" to="/">
                Something else here
              </NavLink>
            </div>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link disabled"
              to="/"
              tabIndex="-1"
              aria-disabled="true"
            >
              Disabled
            </NavLink>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0 mb-3"
            type="submit"
          >
            Search
          </button>
        </form>
        &nbsp;&nbsp;
        <Link to="/login">
          <button
            className="btn btn-outline-danger my-2 my-sm-0"
            onClick={handleLogout}
          >
            Wyloguj
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
