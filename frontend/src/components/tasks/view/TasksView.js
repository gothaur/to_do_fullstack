import React, { Fragment } from "react";
import TasksLogic from "../logic/TasksLogic";
import TaskForm from "./TaskForm";
import TaskView from "./TaskView";

function TasksView() {
  const {
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
  } = TasksLogic();

  return (
    <Fragment>
      <TaskForm
        added={added}
        deadline={deadline}
        description={description}
        errorMsg={errorMsg}
        handleCloseButton={handleCloseButton}
        handleDeadlineChange={handleDeadlineChange}
        handleDescriptionChange={handleDescriptionChange}
        handleNameChange={handleNameChange}
        handleSubmit={handleSubmit}
        name={name}
      />
      {/* <div className="container"> */}
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
        {tasks.map((task) => (
          <TaskView task={task} key={task.id} />
        ))}
      </div>
      {/* </div> */}
      {/* <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Zadanie</th>
            <th scope="col">Opis</th>
            <th scope="col">Zrobione</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={task.id}>
              <th scope="row">{index + 1}</th>
              <td>{task.name}</td>
              <td>{task.description}</td>
              <td>{task.completed ? "Tak" : "Nie"}</td>
            </tr>
          ))}
        </tbody>
      </table> */}
    </Fragment>
  );
}

export default TasksView;
