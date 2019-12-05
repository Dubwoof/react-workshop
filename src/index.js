import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { booksReducer } from "./redux/booksReducer";

import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const store = createStore(booksReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
