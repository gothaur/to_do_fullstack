import React, { Fragment } from "react";
import TasksLogic from "../logic/TasksLogic";

function TasksView() {
  const {
    added,
    description,
    handleCloseButton,
    handleDescriptionChange,
    handleNameChange,
    handleSubmit,
    name,
    tasks,
  } = TasksLogic();

  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-dark mb-3"
        data-toggle="modal"
        data-target="#staticBackdrop"
      >
        Dodaj zadanie
      </button>
      <div
        className="modal fade"
        id="staticBackdrop"
        data-backdrop="static"
        data-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Nowe zadanie
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
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Nazwa zadania</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    value={name}
                    onChange={handleNameChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Opis</label>
                  <textarea
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                    value={description}
                    onChange={handleDescriptionChange}
                    required
                  />
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                    onClick={handleCloseButton}
                  >
                    Zamknij
                  </button>
                  <button type="submit" className="btn btn-dark">
                    {added ? "Dodaj kolejne" : "Dodaj zadanie"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <table className="table table-hover">
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
      </table>
    </Fragment>
  );
}

export default TasksView;
