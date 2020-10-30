import React, { Fragment } from "react";
import { Redirect } from "react-router-dom";
// import LoginLogic from "../logic/LoginLogic";

function LoginView(props) {
  const {
    handleLogin,
    onChangeUsername,
    onChangePassword,
    username,
    password,
    loading,
    message,
    loggedIn,
  } = props;
  // const {
  // username,
  // // password,
  // loading,
  // message,
  // loggedIn,
  // handleLogin,
  // onChangeUsername,
  // onChangePassword,
  // } = LoginLogic();

  return (
    <Fragment>
      {loggedIn ? (
        <Redirect to="/tasks" />
      ) : (
        <div
          className="card"
          style={{
            margin: "auto",
            maxWidth: "350px",
            padding: "20px 20px 20px 20px",
          }}
        >
          <img
            style={{
              width: "128px",
              height: "128px",
              margin: "0 auto 10px",
              display: "block",
            }}
            src="https://img.icons8.com/ios-glyphs/90/000000/user-group-man-man.png"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <form onSubmit={handleLogin}>
              <div className="form-group">
                <label htmlFor="inputUsername">Nazwa użytkownika</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputUsername"
                  value={username}
                  onChange={onChangeUsername}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="inputPassword">Hasło</label>
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword"
                  value={password}
                  onChange={onChangePassword}
                  required
                />
              </div>
              <div className="form-group">
                <button className="btn btn-dark btn-block" disabled={loading}>
                  {loading && (
                    <span className="spinner-border spinner-border-sm"></span>
                  )}
                  <span>Zaloguj</span>
                </button>
              </div>
              {message && (
                <div className="form-group">
                  <div className="alert alert-danger" role="alert">
                    {message}
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      )}
    </Fragment>
  );
}

export default LoginView;
