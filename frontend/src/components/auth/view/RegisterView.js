import React, { Fragment } from "react";
import { Redirect } from "react-router-dom";
import RegisterLogic from "../logic/RegisterLogic";
import validatePassword from "../../../services/Validators";

function RegisterView() {
  const {
    username,
    password1,
    password2,
    loading,
    message,
    signedUp,
    handleRegister,
    onChangeUsername,
    onChangePassword1,
    onChangePassword2,
  } = RegisterLogic();

  return (
    <Fragment>
      {signedUp ? (
        <Redirect to="/login" />
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
            <form onSubmit={handleRegister}>
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
                <label htmlFor="inputPassword1">Hasło</label>
                <input
                  type="password"
                  className={
                    validatePassword().passwordValidated(password1)
                      ? "form-control is-valid"
                      : "form-control is-invalid"
                  }
                  id="inputPassword1"
                  value={password1}
                  onChange={onChangePassword1}
                  required
                />
                <small>
                  {validatePassword().passwordValidated(password1)
                    ? ""
                    : "Hasło musi zawierać:"}
                  <ul>
                    {validatePassword().hasProperLength(password1) ? (
                      ""
                    ) : (
                      <li>Conajmniej 8 znaków</li>
                    )}
                    {validatePassword().hasUpperCase(password1) ? (
                      ""
                    ) : (
                      <li>Conajmniej jedną wielką literę</li>
                    )}
                    {validatePassword().hasNumber(password1) ? (
                      ""
                    ) : (
                      <li>Conajmniej jedną liczbę</li>
                    )}
                    {validatePassword().hasSpecialCharacter(password1) ? (
                      ""
                    ) : (
                      <li>Conajmniej jeden ze znaków !@#$%^&*()</li>
                    )}
                  </ul>
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="inputPassword2">Powtórz Hasło</label>
                <input
                  type="password"
                  className={
                    password1 === password2 && password2 !== ""
                      ? "form-control is-valid"
                      : "form-control is-invalid"
                  }
                  id="inputPassword2"
                  value={password2}
                  onChange={onChangePassword2}
                  required
                />
              </div>
              <div className="form-group">
                <button
                  className="btn btn-dark btn-block"
                  disabled={
                    !(
                      validatePassword().passwordValidated(password1) &&
                      password1 === password2
                    )
                  }
                >
                  {loading && (
                    <span className="spinner-border spinner-border-sm"></span>
                  )}
                  <span>Zarejsetruj się</span>
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

export default RegisterView;
