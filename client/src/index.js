// @flow

import * as React from "react";
import { render } from "react-dom";
import App from "./App/App";

import "./index.css";
import * as serviceWorker from "./serviceWorker";

const element = document.getElementById("root");

if (!element) {
  throw new Error("Unable to render element to id root");
}

render(<App />, element);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
