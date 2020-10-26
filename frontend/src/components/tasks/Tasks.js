import React, { Fragment, useState, useEffect } from "react";

const url = "http://0.0.0.0:8000/api/tasks/";

function Tasks() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("access_token");
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
  }, []);

  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-primary mb-3"
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
              <form>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Nazwa zadania</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Opis</label>
                  <textarea
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Zamknij
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Dodaj zadanie
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

export default Tasks;
