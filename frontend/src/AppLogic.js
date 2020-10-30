import { useState } from "react";
import Cookies from "js-cookie";

import axiosInstance from "./services/axiosAPI";

function AppLogic() {
  const [user, setUser] = useState(
    Cookies.get("username") ? Cookies.get("username") : ""
  );

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [loggedIn, setLoggedIn] = useState(
    Cookies.get("username") ? true : false
  );

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    axiosInstance
      .post("/auth/token/obtain/", {
        username: username,
        password: password,
      })
      .then((response) => {
        axiosInstance.defaults.headers["Authorization"] =
          "JWT " + response.data.access;
        Cookies.set("access_token", response.data.access, {
          // expires: 1,
          path: "",
        });
        Cookies.set("refresh_token", response.data.refresh, {
          expires: 14,
          path: "",
        });
        setLoading(false);
        setUsername("");
        setPassword("");
        setLoggedIn(true);
        Cookies.set("username", username);
        setUser(username);
      })
      .catch((error) => {
        if (error.response.status === 401) {
          setMessage("Nieprawidłowy login lub hasło");
        }
        setUsername("");
        setPassword("");
        setLoading(false);
      });
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
    setMessage("");
  };

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
    setMessage("");
  };
  const handleLogout = () => {
    Cookies.remove("access_token");
    Cookies.remove("refresh_token");
    Cookies.remove("username");
    axiosInstance.defaults.headers["Authorization"] = null;
    setLoggedIn(false);
    localStorage.clear();
  };

  return {
    handleLogin,
    handleLogout,
    setUser,
    user,
    username,
    password,
    loading,
    message,
    loggedIn,
    onChangeUsername,
    onChangePassword,
    setMessage,
    setLoading,
    setUsername,
    setPassword,
  };
}

export default AppLogic;
