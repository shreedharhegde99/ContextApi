import { StrictMode } from "react";
import ReactDOM from "react-dom";
import LoginContext from "./Component/LoginContext";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <LoginContext>
    <App />
  </LoginContext>,

  rootElement
);
