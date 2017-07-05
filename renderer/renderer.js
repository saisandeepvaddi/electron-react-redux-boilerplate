// Webpack will insert styles using loaders. This is needed once here.
// Remove this if you are using CSS in JS. Remove CSS related loaders in 'webpack.config.js' in that case.
require("./css/style.css");

import React, { Component } from "react";
import { render } from "react-dom";
import App from "./components/App";
import store from "./store.js";
import { Provider } from "react-redux";

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
