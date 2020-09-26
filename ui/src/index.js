import "./index.css";
import "animate.css/animate.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const serverHost = process.env.REACT_APP_SERVER_HOST || "";
const apiPort = process.env.REACT_APP_SERVER_PORT || "";

export const apiUrl = `http://${serverHost}:${apiPort}`;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
