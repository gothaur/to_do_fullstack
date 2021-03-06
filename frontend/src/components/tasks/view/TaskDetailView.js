import React, { Fragment } from "react";

const TaskDetailView = (props) => {
  const { task, handleDeleteClick, handleUpdateClick } = props;

  return (
    <Fragment>
      <div
        className="modal fade"
        id={`taskDetail-${task.id}`}
        data-backdrop="static"
        data-keyboard="false"
        tabIndex="-1"
        aria-labelledby="taskDetailLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="taskDetailLabel">
                {task.name}
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              {task.description}
              <br />
              {task.completed}
              <br />
              <div className="modal-footer d-flex bd-highlight">
                <div className="p-2">
                  Skończyć przed: {new Date(task.deadline).toLocaleDateString()}
                </div>
                <div className="ml-auto ">
                  <button
                    type="button"
                    className="btn btn-danger mr-2"
                    data-dismiss="modal"
                    onClick={() => handleDeleteClick(task)}
                  >
                    Usuń
                  </button>
                  <button
                    type="submit"
                    className="btn btn-dark"
                    onClick={() => handleUpdateClick(task)}
                    disabled={task.completed}
                  >
                    Zrobione
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default TaskDetailView;
