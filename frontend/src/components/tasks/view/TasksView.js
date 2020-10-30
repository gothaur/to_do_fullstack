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
    handleActiveButton,
    handleCloseButton,
    handleDeadlineChange,
    handleDescriptionChange,
    handleDeleteClick,
    handleNameChange,
    handleShowAllButton,
    handleSubmit,
    handleUpdateClick,
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
      <button
        className="btn btn-secondary mb-3 ml-3"
        onClick={handleShowAllButton}
      >
        Pokaż wszystko
      </button>
      <button
        className="btn btn-secondary mb-3 ml-3"
        onClick={handleActiveButton}
      >
        Tylko aktywne
      </button>
      <div className="card-deck">
        {tasks.map((task) => (
          <TaskView
            task={task}
            key={task.id}
            handleDeleteClick={handleDeleteClick}
            handleUpdateClick={handleUpdateClick}
          />
        ))}
      </div>
    </Fragment>
  );
}

export default TasksView;
