// @flow

import * as React from "react";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { Route, Switch } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import "./App.css";

/*  ============================
         Redux Reducers
    ============================
*/

import reducers from "../reducers";

/*  ============================
        Component Imports
    ============================
*/

import Navbar from "../components/Header";
import Home from "../components/Home";
import Page from "../components/Page";
import ErrorPage from "../components/ErrorPage";

/*  ============================
       Redux Dev Tools Setup
    ============================
*/
const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

/*  ============================
        Create Redux store
    ============================
*/

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducers, enhancers);

export default function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}
