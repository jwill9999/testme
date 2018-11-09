// @flow

import * as React from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";

import Root from "../RootProvider";

import "./App.css";

/*  ============================
        Component Imports
    ============================
*/

import Navbar from "../components/NavBar/NavBar";
import Home from "../components/Home/Home";

/*  ============================
Container Imports
============================
*/

import ErrorPage from "../containers/ErrorPage/ErrorPage";
import Question from "../containers/Question/Question";

export default function App() {
  return (
    <Root>
      <Router>
        <React.Fragment>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/questions" component={Question} />
            <Route component={ErrorPage} />
          </Switch>
        </React.Fragment>
      </Router>
    </Root>
  );
}
