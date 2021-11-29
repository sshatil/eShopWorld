import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.scss";
import App from "./App";
import { DataProvider } from "./GlobalState";

ReactDOM.render(
  <DataProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </DataProvider>,
  document.getElementById("root")
);
