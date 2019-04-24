import React from "react";
import "./App.css";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import Overview from "./containers/Overview/Overview";
import AddWizard from "./containers/AddWizard/AddWizard";

function App() {
  return (
    <Switch>
      <Route path="/overview" exact component={Overview} />
      <Route path="/addWizard" exact component={AddWizard} />
      <Redirect to="/overview" />
    </Switch>
  );
}

export default withRouter(App);
