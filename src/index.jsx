/**
 * Renders the main application component to the root element.
 *
 * @param {HTMLElement} rootElement - The root element to render the application to.
 *
 * @returns {void}
 */
import React from "react";
import ReactDOM from "react-dom";
import App from "./App/App.jsx";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
