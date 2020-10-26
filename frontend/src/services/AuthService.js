import axios from "axios";

const API_URL = "http://0.0.0.0:8000/auth/";

const register = (username, password) => {
  return axios.post(API_URL + "user/create/", {
    username,
    password,
  });
};

const login = async (username, password) => {
  const response = await axios.post(API_URL + "token/obtain/", {
    username,
    password,
  });
  if (response.data.accessToken) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  register,
  login,
};
