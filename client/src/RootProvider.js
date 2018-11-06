// @flow

import * as React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";

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

/*  ============================
        Flow types
    ============================
*/

type Props = {
  children?: React.Node
};

/* =======================================================
        Root provider needed for testing also
   ========================================================
*/

const RootProvider = (props: Props) => (
  <Provider store={store}>{props.children}</Provider>
);

export default RootProvider;
