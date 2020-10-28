import { useState } from "react";
import axiosInstance from "../../../services/axiosAPI";
import Cookies from "js-cookie";

function LoginLogic() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

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
          expires: 1,
          path: "",
        });
        Cookies.set("refresh_token", response.data.refresh, {
          expires: 7,
          path: "",
        });
        setLoading(false);
        setUsername("");
        setPassword("");
        setLoggedIn(true);
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
  return {
    username,
    password,
    loading,
    message,
    loggedIn,
    handleLogin,
    onChangeUsername,
    onChangePassword,
  };
}

export default LoginLogic;
