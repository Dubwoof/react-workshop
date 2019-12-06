import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { booksReducer } from "./redux/booksReducer";
import thunkMiddleware from "redux-thunk";

import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const store = createStore(booksReducer, applyMiddleware(thunkMiddleware));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
