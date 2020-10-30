import React from "react";
import { Route, Switch } from "react-router-dom";
import LoginView from "../auth/view/LoginView";
import RegisterView from "../auth/view/RegisterView";
import TasksView from "../tasks/view/TasksView";
import HomePageView from "../content/HomePageView";
import NotFound from "../content/NotFound";

const Page = (props) => {
  return (
    <Switch>
      <Route path="/" exact component={HomePageView} />
      <Route path="/tasks" exact component={TasksView} />
      <Route path="/login" exact render={() => <LoginView {...props} />} />
      <Route path="/register" exact component={RegisterView} />
      <Route path="" component={NotFound} />
    </Switch>
  );
};

export default Page;
