import * as React from "react";
import { render } from "react-dom";
import { MyProvider } from "./context";

import App from "./App";

const rootElement = document.getElementById("root");
render(
  <MyProvider>
    <App />
  </MyProvider>,
  rootElement
);
