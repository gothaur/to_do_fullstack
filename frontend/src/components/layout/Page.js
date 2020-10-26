import React from "react";
import { Route, Switch } from "react-router-dom";
import LoginView from "../auth/view/LoginView";
import RegisterView from "../auth/view/RegisterView";
import TasksView from "../tasks/view/TasksView";

const Page = () => {
  return (
    <Switch>
      <Route path="/" exact component={TasksView} />
      <Route path="/login" exact component={LoginView} />
      <Route path="/register" exact component={RegisterView} />
    </Switch>
  );
};

export default Page;
