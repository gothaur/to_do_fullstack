import { useState, useEffect } from "react";
import axiosAPI from "../../../services/axiosAPI";

function TasksLogic() {
  const [added, setAdded] = useState(false);
  const [deadline, setDeadline] = useState("");
  const [updated, setUpdated] = useState(false);
  const [description, setDescription] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [name, setName] = useState("");
  const [tasks, setTasks] = useState([]);
  const [urlParams, setUrlParams] = useState("completed=false");

  const handleDeleteClick = (task) => {
    axiosAPI
      .delete(`/api/tasks/${task.id}/`)
      .then((res) => {
        const refreshed = tasks.filter((value) => task.id !== value.id);
        if (res.status === 204) {
          setTasks(refreshed);
        }
      })
      .catch((error) => {
        console.log("coś poszło nie tak", error);
      });
  };

  const handleUpdateClick = (task) => {
    axiosAPI
      .put(`/api/tasks/${task.id}/`, {
        name: task.name,
        description: task.description,
        deadline: task.deadline,
        completed: true,
      })
      .then((response) => {
        setUpdated((updated) => !updated);
      });
  };

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
        // setTasks([...tasks, response.data]);
        setName("");
        setDescription("");
        setDeadline("");
        setErrorMsg("");
        setAdded(true);
      })
      .catch((error) => {
        setErrorMsg(error.response.data.deadline);
        console.log("error", errorMsg);
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

  const handleShowAllButton = (e) => {
    setUrlParams("completed=");
  };

  const handleActiveButton = (e) => {
    setUrlParams("completed=false");
  };

  useEffect(() => {
    // if (tasks.length === 0) {
    axiosAPI
      .get(`/api/tasks/?${urlParams}`)
      .then((response) => {
        setTasks(response.data);
      })
      .catch((error) => {});
    // }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [added, updated, urlParams]);

  return {
    added,
    deadline,
    description,
    errorMsg,
    handleActiveButton,
    handleCloseButton,
    handleDeadlineChange,
    handleDeleteClick,
    handleDescriptionChange,
    handleNameChange,
    handleShowAllButton,
    handleSubmit,
    handleUpdateClick,
    name,
    tasks,
  };
}

export default TasksLogic;
