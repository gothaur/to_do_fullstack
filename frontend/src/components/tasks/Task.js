{
  /* <button
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
                  <label htmlFor="inputDescription">Opis</label>
                  <textarea
                    type="text"
                    className="form-control"
                    id="inputDescription"
                    value={description}
                    onChange={handleDescriptionChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="inputDate">Termin zakończenia</label>
                  <input
                    type="date"
                    className={
                      errorMsg ? "form-control is-invalid" : "form-control"
                    }
                    id="inputDate"
                    value={deadline}
                    onChange={handleDeadlineChange}
                    required
                  />
                  {errorMsg && (
                    <small className="invalid-feedback">{errorMsg}</small>
                  )}
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-outlined-secondary"
                    data-dismiss="modal"
                    onClick={handleCloseButton}
                  >
                    Zamknij
                  </button>
                  <button
                    type="submit"
                    className="btn btn-dark"
                    disabled={
                      name === "" || description === "" || deadline === ""
                    }
                  >
                    {added ? "Dodaj kolejne" : "Dodaj zadanie"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
          <div className="col">
            <div className="card mb-3" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="card-link">
                  Card link
                </a>
                <a href="#" className="card-link">
                  Another link
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="card-link">
                  Card link
                </a>
                <a href="#" className="card-link">
                  Another link
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="card-link">
                  Card link
                </a>
                <a href="#" className="card-link">
                  Another link
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="card-link">
                  Card link
                </a>
                <a href="#" className="card-link">
                  Another link
                </a>
              </div>
            </div>
          </div>
        </div>
      </div> */
}
