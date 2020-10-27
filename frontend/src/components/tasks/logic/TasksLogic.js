import { useState, useEffect } from "react";
import axiosAPI from "../../../services/axiosAPI";

const url = "http://0.0.0.0:8000/api/tasks/";

function TasksLogic() {
  const [tasks, setTasks] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [added, setAdded] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosAPI
      .post("/api/tasks/", { name: name, description: description })
      .then((response) => {
        tasks.push(response.data);
        setName("");
        setDescription("");
        setAdded(true);
      })
      .catch((error) => {});
  };

  const handleCloseButton = (e) => {
    setAdded(false);
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
    const token = localStorage.getItem("access_token");
    if (tasks.length === 0) {
      fetch(url, {
        accept: "application/json",
        "Accept-Language": "pl-pl",
        mode: "cors",
        "Content-Type": "application/json",
        headers: {
          Authorization: "JWT " + token,
          accept: "application/json",
        },
      })
        .then((response) => {
          if (response.ok) {
            return response;
          }
          throw Error(response.status);
        })
        .then((response) => response.json())
        .then((data) => {
          setTasks(data);
        })
        .catch((error) => console.log(error));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    added,
    description,
    handleCloseButton,
    handleDescriptionChange,
    handleNameChange,
    handleSubmit,
    name,
    tasks,
  };
}

export default TasksLogic;
