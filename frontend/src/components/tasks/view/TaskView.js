import React, { Fragment } from "react";

const TaskView = (props) => {
  const { task } = props;

  return (
    <Fragment>
      <div className="col mb-4" key={task.id}>
        <div className="card h-100 mb-3" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">{task.name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">
              {task.completed ? "Skończone" : "Aktywne"}
            </h6>
            <p className="card-text">{task.description}</p>
            <a href="#" className="card-link">
              Card link
            </a>
            <a href="#" className="card-link">
              Another link
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default TaskView;
