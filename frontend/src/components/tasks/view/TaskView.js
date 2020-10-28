import React, { Fragment } from "react";
import TaskDetail from "./TaskDetail";

const TaskView = (props) => {
  const { task } = props;

  const textSuccess = task.completed ? "text-success" : "";

  const calculateDate = () => {
    const currentTime = new Date();
    const deadline = new Date(task.deadline);
    const daysLeft = deadline - currentTime;
    return Math.ceil(daysLeft / (60 * 60 * 24 * 1000));
  };

  const displayText = () => {
    let msg = "Zadanie ukończone";
    const numberOfDays = calculateDate();
    if (calculateDate() < 0) {
      return "Zakończone niepowodzeniem";
    } else if (!task.completed) {
      if (numberOfDays > 1) {
        msg = `Do końca: ${numberOfDays} dni`;
      } else {
        msg = "Do końca: 1 dzień";
      }
    }
    return msg;
  };

  return (
    <Fragment>
      <div className="hovered">
        <div
          className={`card border-${
            task.completed ? "success" : "secondary"
          } mb-3`}
          style={{ maxWidth: "18rem", minWidth: "18rem" }}
          data-toggle="modal"
          data-target={`#taskDetail-${task.id}`}
        >
          <TaskDetail task={task} />
          <div className={`card-header ${textSuccess}`}>{task.name}</div>
          <div className={`card-body ${textSuccess}`}>
            <p className="card-text">
              <small className="text-muted">{displayText()}</small>
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default TaskView;
