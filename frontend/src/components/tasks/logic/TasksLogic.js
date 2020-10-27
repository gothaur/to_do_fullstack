import { useState, useEffect } from "react";
import axiosAPI from "../../../services/axiosAPI";
// import Cookies from "js-cookie";
import axiosInstance from "../../../services/axiosAPI";

// const url = "http://0.0.0.0:8000/api/tasks/";

function TasksLogic() {
  const [added, setAdded] = useState(false);
  const [deadline, setDeadline] = useState("");
  const [description, setDescription] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [name, setName] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(axiosAPI.headers);
    axiosAPI
      .post("/api/tasks/", {
        name: name,
        description: description,
        deadline: deadline,
      })
      .then((response) => {
        tasks.push(response.data);
        setName("");
        setDescription("");
        setDeadline("");
        setErrorMsg("");
        setAdded(true);
      })
      .catch((error) => {
        // console.log(
        //   `JSON.stringify(error.response: ${JSON.stringify(error.response)}`
        // );
        // console.log(
        //   `error.response.data.deadline: ${error.response.data.deadline}`
        // );
        setErrorMsg(error.response.data.deadline);
        console.log(errorMsg);
      });
  };

  const handleCloseButton = (e) => {
    setAdded(false);
    setName("");
    setDescription("");
    setDeadline("");
    setErrorMsg("");
  };

  const handleDeadlineChange = (e) => {
    const value = e.target.value;
    setDeadline(value);
  };

  const handleDescriptionChange = (e) => {
    const value = e.target.value;
    setDescription(value);
  };

  const handleNameChange = (e) => {
    const value = e.target.value;
    setName(value);
  };

  useEffect(() => {
    // const token = sessionStorage.getItem("access_token");
    // const token = Cookies.get("access_token");
    if (tasks.length === 0) {
      // fetch(url, {
      //   accept: "application/json",
      //   "Accept-Language": "pl-pl",
      //   mode: "cors",
      //   "Content-Type": "application/json",
      //   headers: {
      //     Authorization: "JWT " + token,
      //     accept: "application/json",
      //   },
      // })
      //   .then((response) => {
      //     if (response.ok) {
      //       return response;
      //     }
      //     throw Error(response.status);
      //   })
      //   .then((response) => response.json())
      //   .then((data) => {
      //     setTasks(data);
      //   })
      //   .catch((error) => console.log(error));
      axiosInstance
        .get("/api/tasks/")
        .then((response) => {
          setTasks(response.data);
        })
        .catch((error) => {});
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    added,
    deadline,
    description,
    errorMsg,
    handleCloseButton,
    handleDeadlineChange,
    handleDescriptionChange,
    handleNameChange,
    handleSubmit,
    name,
    tasks,
  };
}

export default TasksLogic;
