import { useState } from "react";
import axiosInstance from "../../../services/axiosAPI";
import validatePassword from "../../../services/Validators";

function RegisterLogic() {
  const [username, setUsername] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [signedUp, setSugnedUp] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    if (
      validatePassword().passwordValidated(password1) &&
      password1 === password2
    ) {
      axiosInstance
        .post("/auth/user/create/", {
          username: username,
          password: password1,
        })
        .then((response) => {
          if (response.status === 201) {
            setLoading(false);
            setUsername("");
            setPassword1("");
            setPassword2("");
            setSugnedUp(true);
          }
        })
        .catch((error) => {});
    }
  };

  const onChangePassword1 = (e) => {
    const password = e.target.value;
    setPassword1(password);
    setMessage("");
  };

  const onChangePassword2 = (e) => {
    const password = e.target.value;
    setPassword2(password);
    setMessage("");
  };

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
    setMessage("");
  };
  return {
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
  };
}

export default RegisterLogic;
