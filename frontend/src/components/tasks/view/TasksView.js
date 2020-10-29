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
      <div className="card-deck">
        {tasks.map((task) => (
          <TaskView task={task} key={task.id} tasks={tasks} />
        ))}
      </div>
    </Fragment>
  );
}

export default TasksView;
