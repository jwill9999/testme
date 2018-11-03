import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

/*  ============================
         Redux Reducers
    ============================
*/

import reducers from "./reducers";

/*  ============================
        Component Imports
    ============================
*/

import App from "./App";

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

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

// TODO: routing
