import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/layout/Header";
import Page from "./components/layout/Page";
import AppLogic from "./AppLogic";

function App() {
  const {
    handleLogin,
    handleLogout,
    onChangePassword,
    onChangeUsername,
    password,
    username,
    loading,
    message,
    loggedIn,
    user,
  } = AppLogic();

  return (
    <BrowserRouter>
      <Header handleLogout={handleLogout} loggedIn={loggedIn} user={user} />
      <div className="container" style={{ textAlign: "center" }}>
        <Page
          handleLogin={handleLogin}
          onChangePassword={onChangePassword}
          onChangeUsername={onChangeUsername}
          password={password}
          username={username}
          loading={loading}
          message={message}
          loggedIn={loggedIn}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
