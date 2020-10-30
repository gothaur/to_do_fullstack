import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header(props) {
  const { handleLogout, loggedIn, user } = props;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
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
          <li className="nav-item">
            <NavLink to="/" className="nav-link">
              Strona główna
            </NavLink>
          </li>
          {/* <li className="nav-item">
            <NavLink to="/tasks" className="nav-link">
              Zadania
            </NavLink>
          </li> */}
          {loggedIn ? (
            <div className="row justify-content-start">
              <li className="nav-item ml-3">
                <NavLink to="/tasks" className="nav-link">
                  Zadania
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
                  {loggedIn ? user : "Dropdown"}
                  {/* Dropdown */}
                </NavLink>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  {/* <NavLink className="dropdown-item" to="/register">
                  Zarejestruj
                </NavLink> */}
                  <NavLink className="dropdown-item" to="/">
                    Another action
                  </NavLink>
                  <div className="dropdown-divider"></div>
                  <NavLink className="dropdown-item" to="/">
                    Something else here
                  </NavLink>
                </div>
              </li>
            </div>
          ) : (
            <NavLink
              className="btn btn-outline-success my-2 my-sm-0"
              to="/register"
            >
              Zarejestruj się
            </NavLink>
          )}
        </ul>
        {loggedIn ? (
          <Link to="/login">
            <button
              className="btn btn-outline-danger my-2 my-sm-0"
              onClick={handleLogout}
            >
              Wyloguj
            </button>
          </Link>
        ) : (
          <Link to="/login">
            <button className="btn btn-outline-success my-2 my-sm-0">
              Zaloguj
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Header;
