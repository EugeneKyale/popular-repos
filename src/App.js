import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./pages/home";
import Single from "./pages/single";

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/repository/:id" component={Single} />
    </Switch>
  );
};

export default App;