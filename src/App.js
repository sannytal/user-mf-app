import React, { useEffect } from "react";
import { Route, Switch, BrowserRouter as Router, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import User from "./components/User";

import { getUserPath } from "./components/Util/path";
import { ContextRegistryState } from "./context";

const App = (props) => {
  return (
    <ContextRegistryState containerProps={props?.containerData}>
      <Router>
        <Switch>
          <Route path={getUserPath()} component={User} />
          
          <React.Fragment>
            <Route path={`/` || `*`} render={() => <Redirect to={getUserPath()} />} />
        </React.Fragment>
        </Switch>
      </Router>
    </ContextRegistryState>
  );
};

export default App;
