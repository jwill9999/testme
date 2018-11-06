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

import Navbar from "../components/Header";
import Home from "../components/Home";
import Page from "../components/Page";
import ErrorPage from "../components/ErrorPage";

export default function App() {
  return (
    <Root>
      <Router>
        <React.Fragment>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/page" component={Page} />
            <Route component={ErrorPage} />
          </Switch>
        </React.Fragment>
      </Router>
    </Root>
  );
}
