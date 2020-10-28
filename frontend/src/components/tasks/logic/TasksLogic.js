import { useState, useEffect } from "react";
import axiosAPI from "../../../services/axiosAPI";

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
    if (tasks.length === 0) {
      axiosAPI
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
